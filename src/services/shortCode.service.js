import { randomInt } from "node:crypto";

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateShortCode(length=6){
    if(!Number.isInteger(length) || length<=0 || length>20) {
        throw new Error("Length must be an integer between 1 and 20");
    }
    let code = "";
    for (let i=0; i<length; i++) {
        const char=alphabet[randomInt(0, 62)];
        code+=char;
    }
    return code;
}
export default generateShortCode;