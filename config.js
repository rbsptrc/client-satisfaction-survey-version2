/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   config.js
========================================== */

const CONFIG = {

    // Google Apps Script Web App URL
    API_URL: "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE",

    // IndexedDB
    DB_NAME: "IIPESO_SURVEY_DB",
    DB_VERSION: 2,
    STORE_NAME: "pendingSurveys",

    // Default value for optional questions
    DEFAULT_OPTIONAL_VALUE: "Did not specify"

};

Object.freeze(CONFIG);