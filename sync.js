/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   sync.js
========================================== */

/**
 * Sync all pending surveys when online
 */
async function syncPendingSurveys() {

    if (!isOnline()) {
        return;
    }

    try {

        const surveys = await getPendingSurveys();

        if (surveys.length === 0) {
            return;
        }

        for (const survey of surveys) {

            try {

                await submitSurvey(survey);

                await deleteSurvey(survey.id);

                console.log("Survey synced:", survey.id);

            } catch (error) {

                console.error("Failed to sync survey:", error);

                // Stop syncing if one submission fails.
                break;

            }

        }

    } catch (error) {

        console.error("Sync error:", error);

    }

}

/**
 * Automatically sync when internet returns
 */
window.addEventListener("online", () => {

    syncPendingSurveys();

});

/**
 * Attempt to sync every 30 seconds
 */
setInterval(() => {

    if (isOnline()) {

        syncPendingSurveys();

    }

}, 30000);