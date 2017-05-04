"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserWebSocketClient = (function () {
    function BrowserWebSocketClient() {
    }
    BrowserWebSocketClient.prototype.open = function (url, protocols) {
        var _this = this;
        this.wsc = new WebSocket(url, protocols);
        this.readyState = 0;
        this.wsc.onmessage = function (event) {
            _this.onmessage({ data: event.data, type: event.type, target: _this });
        };
        this.wsc.onclose = function (event) {
            _this.readyState = 3;
            _this.onclose({ wasClean: event.wasClean, code: event.code, reason: event.reason, target: _this });
        };
        this.wsc.onerror = function (err) {
            _this.onerror(err);
        };
        this.wsc.onopen = function (event) {
            _this.readyState = 1;
            _this.onopen({ target: _this });
        };
    };
    BrowserWebSocketClient.prototype.close = function (code, data) {
        this.readyState = 2;
        this.wsc.close(code, data);
    };
    BrowserWebSocketClient.prototype.send = function (data) {
        this.wsc.send(data);
    };
    return BrowserWebSocketClient;
}());
exports.BrowserWebSocketClient = BrowserWebSocketClient;
