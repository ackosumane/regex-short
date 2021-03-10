
let RegExEmail = str => /^([a-zA-Z]([a-zA-Z0-9\-\_][\.]{0,1}){0,61})?[a-zA-Z0-9\-\_]\@(([a-zA-Z0-9][a-zA-Z0-9\-]{0,61})?[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9]([a-zA-Z0-9\.]{0,61})?[a-zA-Z0-9]$/.test(str);
exports.RegExEmail = RegExEmail

let RegExDomain = str => /^(([a-zA-Z0-9][a-zA-Z0-9\-]{0,61})?[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9]([a-zA-Z0-9\.]{0,61})?[a-zA-Z0-9]$/.test(str);
exports.RegExDomain = RegExDomain

let RegExURL = str => /^http(s)?\:\/\/(www)?(([a-zA-Z0-9][a-zA-Z0-9\-]{0,61})?[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9]([a-zA-Z0-9\.]{0,61})?[a-zA-Z0-9](\S+)?$/.test(str);
exports.RegExURL = RegExURL

let RegExPhone = str => /^(\+)?([0-9][\s\-/]{0,1})+$/.test(str);
exports.RegExPhone = RegExPhone

let RegExHashTag = str => /^\#[a-zA-Z0-9\_]+$/.test(str);
exports.RegExHashTag = RegExHashTag

let RegExBCryptHash = str => /^[a-zA-Z0-9\$\.\/]{60}$/.test(str);
exports.RegExBCryptHash = RegExBCryptHash

let RegExSHA224 = str => /^[a-z0-9]{56}$/.test(str);
exports.RegExSHA224 = RegExSHA224

let RegExSHA256 = str => /^[a-z0-9]{64}$/.test(str);
exports.RegExSHA256 = RegExSHA256

let RegExSHA384 = str => /^[a-z0-9]{96}$/.test(str);
exports.RegExSHA384 = RegExSHA384

let RegExSHA512 = str => /^[a-z0-9]{128}$/.test(str);
exports.RegExSHA512 = RegExSHA512

let RegExJWTToken256 = str => /^[a-zA-Z0-9\.\_\-]{187}$/.test(str);
exports.RegExJWTToken256 = RegExJWTToken256

let RegExJWTToken384 = str => /^[a-zA-Z0-9\.\_\-]{208}$/.test(str);
exports.RegExJWTToken384 = RegExJWTToken384

let RegExJWTToken512 = str => /^[a-zA-Z0-9\.\_\-]{230}$/.test(str);
exports.RegExJWTToken512 = RegExJWTToken512

let RegExUUIDHash = str => /^([a-z0-9]{8})\-([a-z0-9]{4})\-([a-z0-9]{4})\-([a-z0-9]{4})\-([a-z0-9]{12})$/.test(str);
exports.RegExUUIDHash = RegExUUIDHash

let RegExDigits = str => /\d+/.test(str);
exports.RegExDigits = RegExDigits

let RegExAlphanumeric = str => /\w+/.test(str);
exports.RegExAlphanumeric = RegExAlphanumeric

exports.default = {
    RegExEmail: RegExEmail,
    RegExDomain: RegExDomain,
    RegExURL: RegExURL,
    RegExPhone: RegExPhone,
    RegExHashTag: RegExHashTag,
    RegExBCryptHash: RegExBCryptHash,
    RegExSHA224: RegExSHA224,
    RegExSHA256: RegExSHA256,
    RegExSHA384: RegExSHA384,
    RegExSHA512: RegExSHA512,
    RegExJWTToken256: RegExJWTToken256,
    RegExJWTToken384: RegExJWTToken384,
    RegExJWTToken512: RegExJWTToken512,
    RegExUUIDHash: RegExUUIDHash,
    RegExDigits: RegExDigits,
    RegExAlphanumeric: RegExAlphanumeric,
}