


function atbashCipher(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Input must be a string');
    }
    const firstCharCode = 'A'.charCodeAt(0);
    const lastCharCode = 'Z'.charCodeAt(0);

    return text.toUpperCase().replace(/[A-Z]/g, char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode(lastCharCode - (code - firstCharCode));
    });
}

console.log(atbashCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
console.log(atbashCipher('Hello, World!'));
console.log(atbashCipher('Atbash Cipher'));