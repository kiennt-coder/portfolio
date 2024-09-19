"use client"

import { LOCAL_STORAGE_KEY } from "@enums/common";

const useLocalStorage = (keys: Array<LOCAL_STORAGE_KEY>): Storage | Partial<Record<LOCAL_STORAGE_KEY, unknown>> => {

    const values: Partial<Record<LOCAL_STORAGE_KEY, unknown>> = {};
    
    const isLocalStorageExists = typeof localStorage !== 'undefined'

    if(!isLocalStorageExists) return values;

    if(!keys) return localStorage

    keys.forEach((key) => {
        const value = localStorage.getItem(key) ?? "null";
        
        try {
            values[key] = JSON.parse(value)
        } catch (error) {
            values[key] = value
        }
    })

    return values
}

export default useLocalStorage;