/* ==========================================
   IIPESO Client Satisfaction Measurement Survey
   config.js
========================================== */

const CONFIG = {

    /* Google Form */

    FORM_URL:
        "https://docs.google.com/forms/d/e/1FAIpQLSeeMyHmN09yuL8Y2nPylQdPWtZMKiO13igkTQCUaqKKytlI1Q/formResponse",

    AGE_ID:
        "entry.1919104394",

    SEX_ID:
        "entry.1953524582",

    SATISFACTION_ID:
        "entry.128838202",

    /* IndexedDB */

    DB_NAME:
        "IIPESO_SURVEY_DB",

    DB_VERSION:
        1,

    STORE_NAME:
        "pendingSurveys",

    /* Default value for optional questions */

    DEFAULT_OPTIONAL_VALUE:
        "Did not specify"

};

Object.freeze(CONFIG);