"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { logger } = require('@cc-heart/utils');
function writeInspect(path) {
    logger.success(`file create success:${path}`);
}
module.exports = {
    writeInspect
};
