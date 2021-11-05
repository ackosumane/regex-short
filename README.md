# regex-short

Short constants for common regular expressions tests

## Installation

```shell
yarn add regex-short
```

or

```shell
npm install regex-short --save
```

## Basic usage

```js
import {testEmail, testUUIDHash} from 'regex-short'

testEmail('example@domain.com') // true
testEmail('example@domain.c') // false

testUUIDHash('d7fddffb-44e6-4c90-b56e-0b1a45896739') // true
```

[Home page](https://regexexample.com/)

## Props

    //Common

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