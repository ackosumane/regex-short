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
import {testEmail} from 'regex-short'

let email = 'example@domain.com';

if(testEmail(email)){ // Test email for correct format
    return true;
}

return false;
```

[Home page](https://regexexample.com/)

## Props

- testEmail
- testDomain
- testURL
- testPhone
- testHashTag
- testBCryptHash
- testSHA224
- testSHA256
- testSHA384
- testSHA512
- testJWTToken256
- testJWTToken384
- testJWTToken512
- testUUIDHash
- testDigits
- testAlphanumeric