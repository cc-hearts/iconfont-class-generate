"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { writeFileSync } = require('fs');
const { writeInspect } = require('./inspect');
function writeFile(filePath, content) {
    writeFileSync(filePath, content, 'utf8');
    writeInspect(filePath);
}
module.exports = {
    writeFile
};
