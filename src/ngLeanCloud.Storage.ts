import { RxAVClient, IStorage } from 'leancloud-typescript-rx-sdk';

export class BrowserStorage implements IStorage {
    add(key: string, value: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                let dataStr = JSON.stringify(value);
                window.localStorage.setItem(key, dataStr);
                resolve(dataStr);
            } catch (error) {
                reject(error);
            }
        });
    }
    remove(key: string): Promise<boolean> {
        return new Promise<any>((resolve, reject) => {
            try {
                window.localStorage.removeItem(key);
                resolve(key);
            } catch (error) {
                reject(error);
            }
        });
    }
    get(key: string): Promise<string> {
        return new Promise<any>((resolve, reject) => {
            try {
                let dataStr = window.localStorage.getItem(key);
                resolve(dataStr);
            } catch (error) {
                reject(error);
            }
        });
    }
}
