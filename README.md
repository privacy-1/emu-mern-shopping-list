# Shopping List


This is an emulated customer service using P1 harporates

> Shopping list app built with the MERN stack along with Redux for state management, Reactstrap and react-transition-group.

## Quick Start


### config

Add your MONGO_URI to the default.json file. Make sure you set an env var for that and the jwtSecret on deployment

create .env file in the root folder ,and add these :
```
MONGO_URI = <>

JWT_SECRET = <>

PORT = <>

KEYCHAIN_HOST = <>

KEYCHAIN_PORT = <>

KEYCHAIN_SERVICE_CRYPTO_KEY = <>

KEYCHAIN_CACHE_EXPIRE = <>

LDAR_HOST = <>

LDAR_PORT = <>

CERBERUS_HOST = <>

CERBERUS_PORT = <>

CERBERUS_SERVICE_ACCOUNT_USERNAME = <>

CERBERUS_SERVICE_ACCOUNT_PWD  = <>
```

### run 

```bash
# Install dependencies for server
yarn install

# Install dependencies for client
yarn run client-install

# Run the client & server with concurrently
yarn run dev

# Run the Express server only
yarn run server

# Run the React client only
yarn run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## App Info

### Version

1.0.0

### License

This project is licensed under the MIT License
