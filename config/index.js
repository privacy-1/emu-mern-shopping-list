import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  // p1-harpocrates settings
  KEYCHAIN_HOST: process.env.KEYCHAIN_HOST,
  KEYCHAIN_PORT: process.env.KEYCHAIN_PORT,
  KEYCHAIN_SERVICE_CRYPTO_KEY: process.env.KEYCHAIN_SERVICE_CRYPTO_KEY,
  KEYCHAIN_CACHE_EXPIRE: process.env.KEYCHAIN_CACHE_EXPIRE,
  LDAR_HOST: process.env.LDAR_HOST,
  LDAR_PORT: process.env.LDAR_PORT,
  CERBERUS_HOST: process.env.CERBERUS_HOST,
  CERBERUS_PORT: process.env.CERBERUS_PORT,
  CERBERUS_SERVICE_ACCOUNT_USERNAME:
    process.env.CERBERUS_SERVICE_ACCOUNT_USERNAME,
  CERBERUS_SERVICE_ACCOUNT_PWD: process.env.CERBERUS_SERVICE_ACCOUNT_PWD
};
