import SDK from 'p1-harpocrates';

import config from '../../config';

// p1-harpocrates-code
const {
  LDAR_HOST,
  LDAR_PORT,
  CERBERUS_HOST,
  CERBERUS_PORT,
  CERBERUS_SERVICE_ACCOUNT_USERNAME,
  CERBERUS_SERVICE_ACCOUNT_PWD
} = config;

const ldar = new SDK.Ldar(LDAR_HOST, LDAR_PORT);

ldar
  .authenticate(
    CERBERUS_HOST,
    CERBERUS_PORT,
    CERBERUS_SERVICE_ACCOUNT_USERNAME,
    CERBERUS_SERVICE_ACCOUNT_PWD
  )
  .then(() => {
    console.log('ldar auth done');
  }).catch(()=>{
    console.log('ldar auth error');

  });

export default ldar;
