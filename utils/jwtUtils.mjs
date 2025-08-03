import * as jose from 'jose';

export const generateJWT = async function (payload, expirationTime) {
    const alg = 'HS256'

    const jwt = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg })
        .setExpirationTime(expirationTime)
        .sign(encodeSecret())
    return jwt;
}

 const encodeSecret = function () {
     const secret = new TextEncoder().encode(process.env.JWT_SECRET)
     return secret;
}
export const verifyJWT = async function (token) {
    const { payload } = await jose.jwtVerify(token, encodeSecret());
    return payload;

}