/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   db.js
========================================== */

let db;

/**
 * Initialize IndexedDB
 */
function initDB() {

    return new Promise((resolve, reject) => {

        const request = indexedDB.open(
            CONFIG.DB_NAME,
            CONFIG.DB_VERSION
        );

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            if (!db.objectStoreNames.contains(CONFIG.STORE_NAME)) {

                db.createObjectStore(
                    CONFIG.STORE_NAME,
                    {
                        keyPath: "id",
                        autoIncrement: true
                    }
                );

            }

        };

        request.onsuccess = (event) => {

            db = event.target.result;

            resolve();

        };

        request.onerror = () => {

            reject(request.error);

        };

    });

}

/**
 * Save a survey locally
 */
function saveSurvey(survey) {

    return new Promise((resolve, reject) => {

        const transaction = db.transaction(
            CONFIG.STORE_NAME,
            "readwrite"
        );

        const store = transaction.objectStore(
            CONFIG.STORE_NAME
        );

        const request = store.add({

            ...survey,

            createdAt: new Date().toISOString()

        });

        request.onsuccess = () => resolve();

        request.onerror = () => reject(request.error);

    });

}

/**
 * Get all pending surveys
 */
function getPendingSurveys() {

    return new Promise((resolve, reject) => {

        const transaction = db.transaction(
            CONFIG.STORE_NAME,
            "readonly"
        );

        const store = transaction.objectStore(
            CONFIG.STORE_NAME
        );

        const request = store.getAll();

        request.onsuccess = () => {

            resolve(request.result);

        };

        request.onerror = () => {

            reject(request.error);

        };

    });

}

/**
 * Delete a synced survey
 */
function deleteSurvey(id) {

    return new Promise((resolve, reject) => {

        const transaction = db.transaction(
            CONFIG.STORE_NAME,
            "readwrite"
        );

        const store = transaction.objectStore(
            CONFIG.STORE_NAME
        );

        const request = store.delete(id);

        request.onsuccess = () => resolve();

        request.onerror = () => reject(request.error);

    });

}