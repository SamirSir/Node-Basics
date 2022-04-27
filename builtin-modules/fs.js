/**
 * File System module
 * Syntax: fs.readFile( filename, encoding, callback_function )
 */

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files)
// });

const fs = require('fs').promises;

async function readDirectories(filePath = './') {
    try {
        const data = await fs.readdir(filePath);
        console.log(data);
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

readDirectories();
