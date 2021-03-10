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
import {RegExEmail} from 'regex-short'

let email = 'example@domain.com';

if(RegExEmail(email)){ // Test email for correct format
    return true;
}

return false;
```

[RegEx example home page](https://regexexample.com/)

## Props

- RegExEmail
- RegExDomain
- RegExURL
- RegExPhone
- RegExHashTag
- RegExBCryptHash
- RegExSHA224
- RegExSHA256
- RegExSHA384
- RegExSHA512
- RegExJWTToken256
- RegExJWTToken384
- RegExJWTToken512
- RegExUUIDHash
- RegExDigits
- RegExAlphanumeric