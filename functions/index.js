const express = require("express");
const functions = require("firebase-functions");
const axios = require('axios');
const app = express();
const path = require("path");
//const port = 3001;
require('dotenv').config();

const REDIRECT_URI = process.env.REDIRECT_URI;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get("/", (req, res) => {
    //res.send('<h1>LINEログインテストアプリ</h1><a href="/login">LINEでログイン</a>');
    res.sendFile(path.resolve('./', 'build', 'index.html'))
})

app.get("/login", (req, res) => {
    let baseUrl = "https://access.line.me/oauth2/v2.1/authorize";
    const params = new URLSearchParams({
        response_type: "code",
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state: "hoge",
        scope: "profile",
    });
    const url = new URL(`${baseUrl}?${params}`);
    res.redirect(301, url.href);
})

app.get("/callback", (req, res) => {
    (async() => {
        try {
            const issueAccessToken = await axios.post('https://api.line.me/oauth2/v2.1/token', {
                grant_type: "authorization_code",
                code: req.query.code,
                redirect_uri: REDIRECT_URI,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).catch(err => {
                throw new Error('Failed to issue access token' + err.message);
            })
            const getUserProfile = await axios.get('https://api.line.me/v2/profile', {
                headers: {
                    'Authorization': 'Bearer ' + issueAccessToken.data.access_token
                }
            }).catch(err => {
                throw new Error('Failed to get user profile' + err.message);
            })
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.write(JSON.stringify(getUserProfile.data));
            res.end();
        } catch(err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            })
            console.log(err);
            res.write("Error");
            res.end();
        }
    })();
})
/*
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
*/

exports.app = functions.https.onRequest(app);
