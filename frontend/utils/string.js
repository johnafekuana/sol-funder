export const capitalize = (string) => {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const truncate = (longString, limit = 10) => {
    if (typeof longString !== 'string' || longString.length === 0) {
        return '';
    }
    if (longString.length > limit) {
        return longString.substring(0, limit) + '...';
    }
    return longString;
}

