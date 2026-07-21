/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   api.js
========================================== */

/**
 * Submit survey to Google Apps Script
 * Uses a hidden HTML form to avoid CORS issues.
 */
async function submitSurvey(survey) {

    return new Promise((resolve) => {

        let iframe = document.getElementById("hiddenFrame");

        if (!iframe) {

            iframe = document.createElement("iframe");
            iframe.id = "hiddenFrame";
            iframe.name = "hiddenFrame";
            iframe.style.display = "none";

            document.body.appendChild(iframe);

        }

        const form = document.createElement("form");

        form.method = "POST";
        form.action = CONFIG.API_URL;
        form.target = "hiddenFrame";
        form.style.display = "none";

        const input = document.createElement("input");

        input.type = "hidden";
        input.name = "data";
        input.value = JSON.stringify(survey);

        form.appendChild(input);

        document.body.appendChild(form);

        form.submit();

        setTimeout(() => {

            document.body.removeChild(form);

            resolve({
                success: true
            });

        }, 1000);

    });

}

/**
 * Check if browser is online
 */
function isOnline() {

    return navigator.onLine;

}