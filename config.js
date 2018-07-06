/* eslint no-process-env: 0 */

module.exports = {
    logFormat: process.env.LOG_FORMAT || "production",
    port: process.env.PORT || "80",
    secretKey: process.env.SECRET_KEY || "PleaseChangeMe",
    dbURL: process.env.DB_URL || "",
    redisURL: process.env.REDIS_URL || "",
    sentryDSN: process.env.SENTRY_DSN || "",

    cryptoPassword: process.env.CRYPTO_PASSWORD || "PleaseChangeMe"
};
