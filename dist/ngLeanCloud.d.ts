import { IWebSocketClient, IStorage } from 'leancloud-typescript-rx-sdk';
export declare class NgLeanCloud {
    private static _WebSocketProvider;
    static readonly ngWebSocketClient: IWebSocketClient;
    private static _StorageProvider;
    static readonly ngStorage: IStorage;
}
