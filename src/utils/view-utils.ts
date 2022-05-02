
export const truncate = (n: number, str: string): string => {
    if (str.length <= n) { return str; }
    let subString = str.substring(0, n-1);
    let lastWord = str.length > n + 11 ? str.substring(str.length - 11, str.length - 1) : "";
    return `${subString}...${lastWord}`;
};