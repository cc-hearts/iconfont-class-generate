"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generatorIcon(data) {
    const reg = /font-family:\s*"(.*?)"/;
    let prefix = '';
    if (reg.test(data)) {
        prefix = RegExp.$1;
    }
    if (!prefix) {
        throw new Error('prefix match error');
    }
    const regClass = /\.(.*?)(?=:)/gm;
    let icons = data.match(regClass);
    if (icons) {
        icons = icons.map((val) => val.replace('.', `${prefix} `));
    }
    return [prefix, icons];
}
module.exports = {
    generatorIcon
};
