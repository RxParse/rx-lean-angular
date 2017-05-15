"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserStorage = (function () {
    function BrowserStorage() {
    }
    BrowserStorage.prototype.add = function (key, value) {
        return new Promise(function (resolve, reject) {
            try {
                var dataStr = JSON.stringify(value);
                window.localStorage.setItem(key, dataStr);
                resolve(dataStr);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    BrowserStorage.prototype.remove = function (key) {
        return new Promise(function (resolve, reject) {
            try {
                window.localStorage.removeItem(key);
                resolve(key);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    BrowserStorage.prototype.get = function (key) {
        return new Promise(function (resolve, reject) {
            try {
                var dataStr = window.localStorage.getItem(key);
                resolve(dataStr);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    return BrowserStorage;
}());
exports.BrowserStorage = BrowserStorage;
