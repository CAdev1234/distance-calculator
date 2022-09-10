import Cookies from 'js-cookie';

export enum StorageType {
    local,
    session,
    cookie,
}

interface RStorageInterface {
    rcSetItem<T>(type: StorageType, key: string, value: T): void;
    rcGetItem(type: StorageType, key: string): string | null;
    rcRemoveItem(type: StorageType, key: string): void;
}
class RStorage implements RStorageInterface {
    private static instance: RStorage;
    static shared() {
        if (!this.instance) {
            this.instance = new RStorage();
        }
        return this.instance;
    }
    rcSetItem<T>(type = StorageType.local, key: string, value: T) {
        const valueJson = JSON.stringify(value);
        if (type === StorageType.local) {
            localStorage.setItem(key, valueJson);
        } else if (type === StorageType.session) {
            sessionStorage.setItem(key, valueJson);
        } else {
            Cookies.set(key, valueJson);
        }
    }

    rcGetItem(type = StorageType.local, key: string) {
        if (type === StorageType.local) {
            const val = localStorage.getItem(key);
            return JSON.parse(val);
        } else if (type === StorageType.session) {
            const val = sessionStorage.getItem(key);
            return JSON.parse(val);
        } else {
            const val = Cookies.get(key) ? Cookies.get(key) : null;
            return JSON.parse(val);
        }
    }

    rcRemoveItem(type = StorageType.local, key: string) {
        if (type === StorageType.local) {
            localStorage.removeItem(key);
        } else if (type === StorageType.session) {
            sessionStorage.removeItem(key);
        } else {
            Cookies.remove(key);
        }
    }
}

export default RStorage.shared();
