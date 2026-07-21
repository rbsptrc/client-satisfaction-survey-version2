/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   config.js
========================================== */

const CONFIG = {

    // Google Apps Script Web App URL
    API_URL: "https://script.google.com/macros/s/AKfycby_Ua5cuFgpZZ4xgScfBDGr6NOpx-YNxck0-5n-GiR0-7HyR_y32FSNO_xoB1Hx9f2rXA/exec",

    // IndexedDB
    DB_NAME: "IIPESO_SURVEY_DB",
    DB_VERSION: 2,
    STORE_NAME: "pendingSurveys",

    // Default value for optional questions
    DEFAULT_OPTIONAL_VALUE: "Did not specify"

};

Object.freeze(CONFIG);