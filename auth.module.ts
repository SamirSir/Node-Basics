/**
 * @default
 * Secret wrapper functions to every module
 *
 * (function (exports, require, module, __filename, __dirname) {
 */

/**
 * @description
 * Auth Module
 * Demonstration of module in node with multiple stuffs
 */

const url = "https://samir.com";

function pingAuth(name) {
  console.log(`Hi, ${name} Sir`);
}

function showDate() {
  const interval1 = setInterval(() => {
    console.log(new Date());
  }, 1000);
}

module.exports.url = url;
module.exports.pingAuth = pingAuth;
module.exports.showDate = showDate;

// Module objects
// console.log(module);
// console.log(require);
// console.log(module);
// console.log(__filename);
// console.log(__dirname);

/**
 * closing to every module functions
 *
 * })
 */
