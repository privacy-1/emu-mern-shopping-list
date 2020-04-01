import SDK from 'p1-harpocrates';

import config from '../../config';

// p1-harpocrates-code
const {
  KEYCHAIN_HOST,
  KEYCHAIN_PORT,
  KEYCHAIN_SERVICE_CRYPTO_KEY,
  KEYCHAIN_CACHE_EXPIRE,
  CERBERUS_HOST,
  CERBERUS_PORT,
  CERBERUS_SERVICE_ACCOUNT_USERNAME,
  CERBERUS_SERVICE_ACCOUNT_PWD
} = config;

const keychain = new SDK.Keychain(
  KEYCHAIN_HOST,
  KEYCHAIN_PORT,
  KEYCHAIN_SERVICE_CRYPTO_KEY,
  KEYCHAIN_CACHE_EXPIRE
);

keychain
  .authenticate(
    CERBERUS_HOST,
    CERBERUS_PORT,
    CERBERUS_SERVICE_ACCOUNT_USERNAME,
    CERBERUS_SERVICE_ACCOUNT_PWD
  )
  .then(() => {
    console.log('keychain auth done');
    return true;
  })
  .catch(err => {
    console.log('keychain auth error');
  });


export default keychain;
