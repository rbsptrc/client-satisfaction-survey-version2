/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    await initDB();

    if (isOnline()) {
        await syncPendingSurveys();
    }

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

            // Always save locally first
            await saveSurvey(survey);

            // If online, immediately send to Apps Script
            if (isOnline()) {

                await submitSurvey(survey);

                const pending = await getPendingSurveys();

                for (const item of pending) {
                    await deleteSurvey(item.id);
                }

                statusMessage.textContent =
                    "Survey submitted successfully.";

            } else {

                statusMessage.textContent =
                    "Offline. Response saved and will sync automatically.";

            }

            form.reset();

        } catch (error) {

            console.error(error);

            statusMessage.textContent =
                "Submission failed.";

        }

        submitBtn.disabled = false;

    });

});