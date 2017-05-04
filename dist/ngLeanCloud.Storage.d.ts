import { IStorage } from 'leancloud-typescript-rx-sdk';
export declare class BrowserStorage implements IStorage {
    add(key: string, value: any): Promise<any>;
    remove(key: string): Promise<boolean>;
    get(key: string): Promise<string>;
}
