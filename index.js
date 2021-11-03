
let testEmail = str => /^([a-zA-Z]([a-zA-Z0-9\-\_][\.]{0,1}){0,61})?[a-zA-Z0-9\-\_]\@(([a-zA-Z0-9][a-zA-Z0-9\-]{0,61})?[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9]([a-zA-Z0-9\.]{0,61})?[a-zA-Z0-9]$/.test(str);
exports.testEmail = testEmail

let testDomain = str => /^(([a-zA-Z0-9][a-zA-Z0-9\-]{0,61})?[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9]([a-zA-Z0-9\.]{0,61})?[a-zA-Z0-9]$/.test(str);
exports.testDomain = testDomain

let testURL = str => /^http(s)?\:\/\/(www)?(([a-zA-Z0-9][a-zA-Z0-9\-]{0,61})?[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9]([a-zA-Z0-9\.]{0,61})?[a-zA-Z0-9](\S+)?$/.test(str);
exports.testURL = testURL

let testPhone = str => /^(\+)?([0-9][\s\-/]{0,1})+$/.test(str);
exports.testPhone = testPhone

let testHashTag = str => /^\#[a-zA-Z0-9\_]+$/.test(str);
exports.testHashTag = testHashTag

let testBCryptHash = str => /^[a-zA-Z0-9\$\.\/]{60}$/.test(str);
exports.testBCryptHash = testBCryptHash

let testSHA224 = str => /^[a-z0-9]{56}$/.test(str);
exports.testSHA224 = testSHA224

let testSHA256 = str => /^[a-z0-9]{64}$/.test(str);
exports.testSHA256 = testSHA256

let testSHA384 = str => /^[a-z0-9]{96}$/.test(str);
exports.testSHA384 = testSHA384

let testSHA512 = str => /^[a-z0-9]{128}$/.test(str);
exports.testSHA512 = testSHA512

let testJWTToken256 = str => /^[a-zA-Z0-9\.\_\-]{187}$/.test(str);
exports.testJWTToken256 = testJWTToken256

let testJWTToken384 = str => /^[a-zA-Z0-9\.\_\-]{208}$/.test(str);
exports.testJWTToken384 = testJWTToken384

let testJWTToken512 = str => /^[a-zA-Z0-9\.\_\-]{230}$/.test(str);
exports.testJWTToken512 = testJWTToken512

let testUUIDHash = str => /^([a-z0-9]{8})\-([a-z0-9]{4})\-([a-z0-9]{4})\-([a-z0-9]{4})\-([a-z0-9]{12})$/.test(str);
exports.testUUIDHash = testUUIDHash

let testDigits = str => /\d+/.test(str);
exports.testDigits = testDigits

let testAlphanumeric = str => /\w+/.test(str);
exports.testAlphanumeric = testAlphanumeric

exports.default = {
    testEmail: testEmail,
    testDomain: testDomain,
    testURL: testURL,
    testPhone: testPhone,
    testHashTag: testHashTag,
    testBCryptHash: testBCryptHash,
    testSHA224: testSHA224,
    testSHA256: testSHA256,
    testSHA384: testSHA384,
    testSHA512: testSHA512,
    testJWTToken256: testJWTToken256,
    testJWTToken384: testJWTToken384,
    testJWTToken512: testJWTToken512,
    testUUIDHash: testUUIDHash,
    testDigits: testDigits,
    testAlphanumeric: testAlphanumeric,
}