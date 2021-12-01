import ErrorsInterface from '../../Store/Interface/Error/ErrorInterface';

export function makeId(length: number) {
    const result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i + 1) {
        result.concat(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result;
}

export default function errHandler(): ErrorsInterface {
    return { code: 9999, description: 'Błąd połączenia z serwerem API' };
}

export function userHasRole(userRoles: string[], allowedRoles: string[]): boolean {
    return userRoles.some((role: string) => allowedRoles.includes(role));
}
