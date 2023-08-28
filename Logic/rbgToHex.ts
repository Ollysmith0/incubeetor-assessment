export const componentToHex = (param: number) => {
    let num = param > 255 ? 255 : param;
    const hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

export const rbg = (r: number, g: number, b: number): string => {
    if(r < 0 || g < 0 || b < 0) return('number cant be negative!');
    // console.log('#' + componentToHex(r) + componentToHex(g) + componentToHex(b));
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

rbg(0, 0, 0);
rbg(255, 255, 255);
rbg(255, 255, 300);
rbg(148, 0, 211);
