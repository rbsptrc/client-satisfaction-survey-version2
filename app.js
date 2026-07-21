/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await initDB();

    } catch (error) {

        console.error("IndexedDB initialization failed:", error);

        return;

    }

    // Attempt to sync any pending surveys
    syncPendingSurveys();

    const form = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        submitBtn.disabled = true;
        statusMessage.textContent = "";

        const survey = {

            ageRange:
                document.querySelector('input[name="ageRange"]:checked')?.value ||
                CONFIG.DEFAULT_OPTIONAL_VALUE,

            sex:
                document.querySelector('input[name="sex"]:checked')?.value ||
                CONFIG.DEFAULT_OPTIONAL_VALUE,

            satisfaction:
                document.querySelector('input[name="satisfaction"]:checked').value

        };

        try {

            // Save locally first
            await saveSurvey(survey);

            // If online, immediately try to sync
            if (isOnline()) {

                await syncPendingSurveys();

                statusMessage.textContent =
                    "Survey submitted successfully.";

            } else {

                statusMessage.textContent =
                    "No internet connection. Your response has been saved and will sync automatically.";

            }

            form.reset();

        } catch (error) {

            console.error(error);

            statusMessage.textContent =
                "Unable to save your response.";

        }

        submitBtn.disabled = false;

    });

});