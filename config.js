/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   config.js
========================================== */

const CONFIG = {

    /* Google Form URL
       Replace this AFTER creating your Google Form.
    */
    FORM_URL: "",

    /* Google Form Entry IDs
       Replace these AFTER getting the pre-filled link.
    */
    AGE_ID: "",
    SEX_ID: "",
    SATISFACTION_ID: "",

    /* IndexedDB */

    DB_NAME: "IIPESO_SURVEY_DB",

    DB_VERSION: 1,

    STORE_NAME: "pendingSurveys",

    /* Default value for unanswered optional questions */

    DEFAULT_OPTIONAL_VALUE: "Did not specify"

};

Object.freeze(CONFIG);