const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "admin-service" },
  transports: [
    new winston.transports.File({
      filename: "./log/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "./log/info.log", level: "info" }),
  ],
});

module.exports = {
  logger,
};
