'use strict';

/**
 * Global front-end error handling for Jacuba Visuals Web.
 *
 * Purpose:
 * - Catch failed API requests.
 * - Catch normal JavaScript runtime errors.
 * - Catch unhandled Promise errors.
 * - Prepare a clean structure for a future PHP or cloud logging dashboard.
 */

/**
 * Creates a consistent error object for future logging.
 *
 * @param {string} type - The category of the error.
 * @param {string} message - Human-readable error message.
 * @param {string} source - File, URL, or function where the error happened.
 * @param {number|null} line - Line number when available.
 * @param {number|null} column - Column number when available.
 * @returns {Object} A structured error report object.
 */
const createErrorReport = function (type, message, source = 'unknown', line = null, column = null) {
    return {
        type,
        message,
        source,
        line,
        column,
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        createdAt: new Date().toISOString(),
    };
};

/**
 * Logs an error report safely in the browser console.
 *
 * Later, this function can send the report to:
 * - PHP endpoint
 * - Node.js endpoint
 * - Google Cloud logging endpoint
 *
 * @param {Object} report - The structured error report.
 * @returns {void}
 */
const logErrorReport = function (report) {
    console.group('Jacuba Visuals Web Error Report');
    console.error(report.message);
    console.table(report);
    console.groupEnd();

    /*
        FUTURE BACKEND UPGRADE:

        fetch('/api/log-error.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(report),
        });
    */
};

/**
 * Fetches external JSON data with professional error handling.
 *
 * @param {string} url - The endpoint URL that should return JSON.
 * @returns {Promise<Object|null>} The parsed JSON data, or null if the request fails.
 */
const fetchExternalData = async function (url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with HTTP status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        const report = createErrorReport(
            'fetch-error',
            error.message,
            url
        );

        logErrorReport(report);

        return null;
    }
};

/**
 * Catches normal JavaScript runtime errors.
 *
 * Example:
 * - undefinedFunction();
 * - broken variable reference
 */
window.addEventListener('error', function (event) {
    const report = createErrorReport(
        'runtime-error',
        event.message,
        event.filename,
        event.lineno,
        event.colno
    );

    logErrorReport(report);
});

/**
 * Catches unhandled Promise errors.
 *
 * Example:
 * - failed async function without catch()
 * - rejected Promise not handled correctly
 */
window.addEventListener('unhandledrejection', function (event) {
    const message = event.reason instanceof Error
        ? event.reason.message
        : String(event.reason);

    const report = createErrorReport(
        'promise-error',
        message,
        'unhandled-promise'
    );

    logErrorReport(report);
});