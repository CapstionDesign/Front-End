import React from 'react';
import style from './LoginPage.module.css';
import { Link } from 'react-router-dom';

    function Content() {

        return (
            <div className={style.content}>
                <Login/>
            </div>
        );
    }

    function Kakao() {

        return (
            <div>
                <Link to={'/KakaoLogin'}>
                    <p className={style.kakao}>Login with kakao</p>
                </Link>
            </div>
        )
    }

    function Login() {
        return(
            <>
                <div className={style.login}>
                    <h3>Sign in to 두유타운</h3>
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