"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { fetchCssResource } = require('./fetch');
const { generatorIcon } = require('./genClassName');
function genJson(iconList) {
    return new Promise((resolve) => {
        let count = 0;
        iconList.reduce((acc, iconPath) => {
            fetchCssResource(iconPath).then((iconContent) => {
                const [prefix, classNames] = generatorIcon(iconContent);
                console.log(prefix, classNames);
                if (!acc.has(prefix)) {
                    acc.set(prefix, new Set());
                }
                classNames.forEach((className) => acc.get(prefix)?.add(className));
                count++;
                if (count === iconList.length)
                    resolve(acc);
            });
            return acc;
        }, new Map());
    });
}
module.exports = {
    genJson
};
