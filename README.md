# line-login-test-app

## 構成
- Functions
    - Express
- Hosting
    - React

## Getting Started
First, prepare .env file and set API key.
```sh
touch .env
echo "REDIRECT_URI=localhost:8080/api/callback" >> .env
echo "CLIENT_ID=xxxxxxxxxx" >> .env
echo "CLIENT_SECRET=xxxxxxxxxxxxxxxxxx" >> .env
```
Second, `npm i` to install dependencies.
And then run the development server:
```sh
npm run dev
```

## Setup
You must install `Firebase CLI`
```sh
npm install -g firebase-tools
firebase login
```

## Local development
### development server
```sh
npm run dev
```
### Emulator
```sh
npm run build
firebase emulators:start
```

## Deploy on Firebase
```sh
npm run build
firebase deploy
```
