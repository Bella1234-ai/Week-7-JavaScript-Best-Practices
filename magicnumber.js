// Magic numbers are raw values in your code with no explanation of what they mean or where they came from.

// what's special about 8?
if (password.length < 8) { }

// Is 8 a security requirement? A UI limit? A database constraint? You can't tell. Worse, if this number appears in 5 places and the requirement changes to 12, you have to hunt down every 8 and hope you don't miss one or accidentally change an 8 that means something else.
setTimeout(callback, 86400000);
// You have to do mental math to figure out this is 24 hours in milliseconds. The GOOD version makes it self-documenting AND shows the math:
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
//                 hrs  min  sec  ms
// The multiplication isn't inefficient — JavaScript calculates it once at compile time. But it makes the intent crystal clear.
// 404 — is this a typo or intentional?
if (response.status === 404) { }
// HTTP status codes are well-known, but HTTP_NOT_FOUND communicates intent, and HTTP_UNAUTHORIZED vs 401 is far less obvious to someone unfamiliar with HTTP.
// ── Group related constants together ──────────
const PASSWORD = {
    MIN_LENGTH:     8,
    MAX_LENGTH:    128,
    MIN_UPPERCASE:   1,
};

const TIME_MS = {
    ONE_SECOND:           1000,
    ONE_MINUTE:      60 * 1000,
    ONE_HOUR:    60 * 60 * 1000,
    ONE_DAY: 24 * 60 * 60 * 1000,
};

const HTTP = {
    OK:           200,
    CREATED:      201,
    BAD_REQUEST:  400,
    UNAUTHORIZED: 401,
    NOT_FOUND:    404,
    SERVER_ERROR: 500,
};

// ── Usage reads like prose ────────────────────
if (password.length < PASSWORD.MIN_LENGTH) { }
setTimeout(callback, TIME_MS.ONE_DAY);
if (response.status === HTTP.NOT_FOUND) { }

// The three questions to ask about any raw value:
// Question If yes →Would someone have to Google this to understand it?Name itCould this value appear more than once?Name itCould this value ever change?Name it
// If the answer to all three is no (e.g. const items = [] or index + 1), a raw value is fine. Everything else gets a name.