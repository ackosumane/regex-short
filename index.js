
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

let testIPAddress = str => /^(\d){1,4}\.(\d){1,4}\.(\d){1,4}\.(\d){1,4}$/.test(str);
exports.testIPAddress = testIPAddress

let testMD5Hash = str => /^[a-z0-9]{32}$/.test(str);
exports.testMD5Hash = testMD5Hash

// Digits

let testDigits = str => /\d+/.test(str);
exports.testDigits = testDigits

let testNonDigits = str => /\D+/.test(str);
exports.testNonDigits = testNonDigits

let testStartWithDigit = str => /^\d/.test(str);
exports.testStartWithDigit = testStartWithDigit

let testStartWithDigits = str => /^\d+/.test(str);
exports.testStartWithDigits = testStartWithDigits

let testEndWithDigit = str => /\d$/.test(str);
exports.testStartWithDigit = testStartWithDigit


// Letters

let testAlphanumeric = str => /\w+/.test(str);
exports.testAlphanumeric = testAlphanumeric

let testNonAlphanumeric = str => /\W+/.test(str);
exports.testNonAlphanumeric = testNonAlphanumeric

let testOnlyLetters = str => /[a-zA-Z]/.test(str);
exports.testOnlyLetters = testOnlyLetters

let testNonLetters = str => /[^a-zA-Z]/.test(str);
exports.testNonLetters = testNonLetters

let testStartLetter = str => /^[a-zA-Z]/.test(str);
exports.testStartLetter = testStartLetter

let testStartLetters = str => /^[a-zA-Z]+/.test(str);
exports.testStartLetters = testStartLetters

let testEndLetter = str => /[a-zA-Z]$/.test(str);
exports.testEndLetter = testEndLetter

let testOnlyLowerCase = str => /^[a-z]+$/.test(str);
exports.testOnlyLowerCase = testOnlyLowerCase

let testOnlyUpperCase = str => /^[A-Z]+$/.test(str);
exports.testOnlyUpperCase = testOnlyUpperCase

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
    testIPAddress: testIPAddress,
    testMD5Hash: testMD5Hash,

    // Digits

    testDigits: testDigits,
    testNonDigits: testNonDigits,
    testStartWithDigit: testStartWithDigit,
    testStartWithDigits: testStartWithDigits,
    testEndWithDigit: testEndWithDigit,

    // Letters

    testAlphanumeric: testAlphanumeric,
    testNonAlphanumeric: testNonAlphanumeric,
    testOnlyLetters: testOnlyLetters,
    testNonLetters: testNonLetters,
    testStartLetter: testStartLetter,
    testStartLetters: testStartLetters,
    testEndLetter: testEndLetter,
    testOnlyLowerCase: testOnlyLowerCase,
    testOnlyUpperCase: testOnlyUpperCase,
}