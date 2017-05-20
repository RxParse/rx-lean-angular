import { NgModule, ModuleWithProviders } from "@angular/core";
import { IWebSocketClient, IStorage, RxAVClient } from 'rx-lean-js-core';
import { BrowserWebSocketClient } from './RxLeanCloud.Angular.WebSocketClient';
import { BrowserStorage } from './RxLeanCloud.Angular.Storage';

export class ngRxLeanCloud {
    private static _WebSocketProvider: IWebSocketClient;
    static get ngWebSocketClient() {
        if (ngRxLeanCloud._WebSocketProvider == null || typeof ngRxLeanCloud._WebSocketProvider == 'undefined') {
            ngRxLeanCloud._WebSocketProvider = new BrowserWebSocketClient();
        }
        return ngRxLeanCloud._WebSocketProvider;
    }

    private static _StorageProvider: IStorage;
    static get ngStorage() {
        if (ngRxLeanCloud._StorageProvider == null || typeof ngRxLeanCloud._StorageProvider == 'undefined') {
            ngRxLeanCloud._StorageProvider = new BrowserStorage();
        }
        return ngRxLeanCloud._StorageProvider;
    }
}