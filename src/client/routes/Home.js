import React from "react";
import { Registration } from '../auth/Registration'

export const Home = () => {
    return (
        <>
            <h1>LINEloginテストアプリ</h1>
            <a href="/api/login">LINEでログイン</a>
            <Registration />
        </>
    )
}
