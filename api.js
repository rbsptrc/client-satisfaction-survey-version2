/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   api.js
========================================== */

/**
 * Submit a survey to Google Forms
 */
async function submitSurvey(survey) {

    const formData = new URLSearchParams();

    formData.append(
        CONFIG.AGE_ID,
        survey.ageRange || CONFIG.DEFAULT_OPTIONAL_VALUE
    );

    formData.append(
        CONFIG.SEX_ID,
        survey.sex || CONFIG.DEFAULT_OPTIONAL_VALUE
    );

    formData.append(
        CONFIG.SATISFACTION_ID,
        survey.satisfaction
    );

    await fetch(CONFIG.FORM_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {

            "Content-Type":
                "application/x-www-form-urlencoded"

        },

        body: formData.toString()

    });

    return {

        success: true

    };

}

/**
 * Check if the browser is online
 */
function isOnline() {

    return navigator.onLine;

}