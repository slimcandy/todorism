import { getLocalList, setLocalList } from './localStorage';
import { List } from '../store/types';

// Find list by ID
export const getStorageList = (key: List['key']): Promise<List | null> => getLocalList(key);

// Save list by ID
export const setStorageList = (key: List['key'], list: List): Promise<void> => setLocalList(key, list);
