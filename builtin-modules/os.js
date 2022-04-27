/**
 * OS module: gives every information about the server OS
 */
const os = require('os');

var totalMemory = os.totalmem() + ' Bytes';

var freeMemory = os.freemem() + ' Bytes';

console.log({ totalMemory, freeMemory });
