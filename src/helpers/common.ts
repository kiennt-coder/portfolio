import { Key } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @Function cn
 * @param {ClassValue[]} inputs
 * @return {string}
 * Description: 
 *      - Kết hợp các lớp CSS dựa trên điều kiện với thư viện 'clsx'
 *      - Hợp nhất và giải quyết các xung đột lớp Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * @Function generateKey
 * @param {number} length
 * @return {string}
 * Description: 
 *      - Tạo key bằng cách kết hợp các ký tự ngẫu nhiên từ một danh sách ký tự cho trước
 *      - Có thể thay đổi độ dài của key bằng tham số truyền vào (mặc định là 32 ký tự)
 */
export function generateKey(length: number = 32): Key {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
}