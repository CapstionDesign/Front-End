import React from 'react';
import style from './LoginPage.module.css';

    function Content() {

        return (
            <div className={style.content}>
                <Login/>
            </div>
        );
    }

    function Kakao() {

        return (
            <div className={style.kakao}>
                <h5>Login with kakao</h5>
            </div>
        )
    }

    function Login() {
        return(
            <>
                <div className={style.login}>
                    <h3>Sign in to 부르즈할리파</h3>
                    <Kakao/>
                </div>
            </>
        );
    }

    function LoginPage(props) {

        return (
            <div className={style.container}>
                <Content/>
            </div>
        );
    }

    export default LoginPage;