import React from 'react';
import style from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './KakaoLogin';
import { NavLink } from 'react-router-dom';

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
                <h5><NavLink to='/KakaoLogin'>Login with kakao</NavLink></h5>
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
        const navigate = useNavigate();
        navigate('/KakaoLogin')
        return (
            <div className={style.container}>
                <Content/>
            </div>
        );
    }

    export default LoginPage;