/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   api.js
========================================== */

async function submitSurvey(survey) {

    const form = document.createElement("form");

    form.method = "POST";
    form.action = CONFIG.FORM_URL;
    form.target = "hidden_iframe";
    form.style.display = "none";

    function addField(name, value) {

        const input = document.createElement("input");

        input.type = "hidden";
        input.name = name;
        input.value = value;

        form.appendChild(input);

    }

    addField(
        CONFIG.AGE_ID,
        survey.ageRange || CONFIG.DEFAULT_OPTIONAL_VALUE
    );

    addField(
        CONFIG.SEX_ID,
        survey.sex || CONFIG.DEFAULT_OPTIONAL_VALUE
    );

    addField(
        CONFIG.SATISFACTION_ID,
        survey.satisfaction
    );

    document.body.appendChild(form);

    let iframe = document.getElementById("hidden_iframe");

    if (!iframe) {

        iframe = document.createElement("iframe");
        iframe.id = "hidden_iframe";
        iframe.name = "hidden_iframe";
        iframe.style.display = "none";

        document.body.appendChild(iframe);

    }

    form.submit();

    document.body.removeChild(form);

    return { success: true };

}

function isOnline() {

    return navigator.onLine;

}