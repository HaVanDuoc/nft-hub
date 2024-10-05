import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const utils = {
    cn: (...classes: ClassValue[]): string => {
        return twMerge(clsx(...classes));
    },

    generateRandomAriaLabel: (prefix: string, length: number = 10): string => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = prefix;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return result;
    }

}

export default utils