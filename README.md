# test-app

## 構成
- Functions
    - Express
- Hosting
    - React


## Getting Started

First, prepare .env file and set API key.
```sh
touch ./backend/functions/.env
echo "REDIRECT_URI=https://xxxxx/callback" >> .env
echo "CLIENT_ID=xxxxxxxxxx" >> .env
echo "CLIENT_SECRET=xxxxxxxxxxxxxxxxxx" >> .env
```
Second, `npm i` to install dependencies.
And then run the development server:
```sh
firebase serve --only functions,hosting
```

## Setup
You must install `Firebase CLI`
```sh
npm install -g firebase-tools
firebase login
```

## Deploy on Firebase
```sh
npm run build
firebase deploy
```
