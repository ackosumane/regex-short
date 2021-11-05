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

    testEmail,
    testDomain,
    testURL,
    testPhone,
    testHashTag,
    testBCryptHash,
    testSHA224,
    testSHA256,
    testSHA384,
    testSHA512,
    testJWTToken256,
    testJWTToken384,
    testJWTToken512,
    testUUIDHash,
    testIPAddress,
    testMD5Hash,

    // Digits

    testDigits,
    testNonDigits,
    testStartWithDigit,
    testStartWithDigits,
    testEndWithDigit,

    // Letters

    testAlphanumeric,
    testNonAlphanumeric,
    testOnlyLetters,
    testNonLetters,
    testStartLetter,
    testStartLetters,
    testEndLetter,
    testOnlyLowerCase,
    testOnlyUpperCase,