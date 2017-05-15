"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ngLeanCloud_WebSocketClient_1 = require("./ngLeanCloud.WebSocketClient");
var ngLeanCloud_Storage_1 = require("./ngLeanCloud.Storage");
var NgLeanCloud = (function () {
    function NgLeanCloud() {
    }
    Object.defineProperty(NgLeanCloud, "ngWebSocketClient", {
        get: function () {
            if (NgLeanCloud._WebSocketProvider == null || typeof NgLeanCloud._WebSocketProvider == 'undefined') {
                NgLeanCloud._WebSocketProvider = new ngLeanCloud_WebSocketClient_1.BrowserWebSocketClient();
            }
            return NgLeanCloud._WebSocketProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgLeanCloud, "ngStorage", {
        get: function () {
            if (NgLeanCloud._StorageProvider == null || typeof NgLeanCloud._StorageProvider == 'undefined') {
                NgLeanCloud._StorageProvider = new ngLeanCloud_Storage_1.BrowserStorage();
            }
            return NgLeanCloud._StorageProvider;
        },
        enumerable: true,
        configurable: true
    });
    return NgLeanCloud;
}());
exports.NgLeanCloud = NgLeanCloud;
