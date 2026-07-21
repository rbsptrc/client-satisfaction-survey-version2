/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   sync.js
========================================== */

/**
 * Send all pending surveys to Google Apps Script
 */
async function syncPendingSurveys() {

    if (!isOnline()) return;

    const surveys = await getPendingSurveys();

    for (const survey of surveys) {

        try {

            await submitSurvey(survey);

            await deleteSurvey(survey.id);

            console.log("Synced:", survey.id);

        } catch (error) {

            console.error("Sync failed:", error);

            break;

        }

    }

}

/**
 * Sync immediately when internet returns
 */
window.addEventListener("online", async () => {

    await syncPendingSurveys();

});

/**
 * Check every 30 seconds
 */
setInterval(async () => {

    if (isOnline()) {

        await syncPendingSurveys();

    }

}, 30000);