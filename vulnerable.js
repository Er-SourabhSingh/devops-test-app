// WARNING: intentionally vulnerable file for security gate testing
const crypto = require("crypto");
const vm = require("vm");

// S5542: weak cipher algorithm - SonarQube Vulnerability
function encryptData(data) {
  const cipher = crypto.createCipher("des", "weakkey");
  return cipher.update(data, "utf8", "hex") + cipher.final("hex");
}

// S2083: path traversal - SonarQube Vulnerability
const fs = require("fs");
function readFile(userInput) {
  return fs.readFileSync("/var/data/" + userInput);
}

// S4790: weak hashing - SonarQube Vulnerability
function hashPassword(pwd) {
  return crypto.createHash("md5").update(pwd).digest("hex");
}

module.exports = { encryptData, readFile, hashPassword };
