import { NgModule, ModuleWithProviders } from "@angular/core";
import { IWebSocketClient, IStorage, RxAVClient } from 'leancloud-typescript-rx-sdk';
import { BrowserWebSocketClient } from './ngLeanCloud.WebSocketClient';
import { BrowserStorage } from './ngLeanCloud.Storage';

export class NgLeanCloud {
    private static _WebSocketProvider: IWebSocketClient;
    static get ngWebSocketClient() {
        if (NgLeanCloud._WebSocketProvider == null || typeof NgLeanCloud._WebSocketProvider == 'undefined') {
            NgLeanCloud._WebSocketProvider = new BrowserWebSocketClient();
        }
        return NgLeanCloud._WebSocketProvider;
    }

    private static _StorageProvider: IStorage;
    static get ngStorage() {
        if (NgLeanCloud._StorageProvider == null || typeof NgLeanCloud._StorageProvider == 'undefined') {
            NgLeanCloud._StorageProvider = new BrowserStorage();
        }
        return NgLeanCloud._StorageProvider;
    }
}