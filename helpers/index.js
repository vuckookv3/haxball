const h = {};
const AppError = require('./AppError');

h.aW = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
h.AppError = AppError;

module.exports = h;