import CryptoJS from "crypto-js";
//funcion que encripta las contraseñas

const key = "pollitoPOLLITE";

export const encrypt = (text) => {
    const hash = CryptoJS.SHA256(key);
    const ciphertext = CryptoJS.AES.encrypt(text, hash, {
        mode: CryptoJS.mode.ECB,
    });
    return ciphertext.toString();
};
export const decrypt = (ciphertext) => {
    const hash = CryptoJS.SHA256(key);
    const bytes = CryptoJS.AES.decrypt(ciphertext, hash, {
        mode: CryptoJS.mode.ECB,
    });
    return bytes.toString(CryptoJS.enc.Utf8);
};