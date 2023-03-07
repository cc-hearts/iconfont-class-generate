"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { request } = require('https');
const { URL } = require('url');
function fetchCssResource(path) {
    return new Promise((resolve, reject) => {
        const options = new URL(path);
        let data = '';
        const req = request(options, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                data += chunk.toString();
            });
            res.on('end', () => {
                resolve(data);
            });
            res.on('error', (err) => {
                reject(err);
            });
        });
        req.end();
    });
}
module.exports = {
    fetchCssResource
};
