// commonMiddleware.js
const express = require('express');

// Common middleware for logging requests
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

module.exports = {
  logRequest,
};
