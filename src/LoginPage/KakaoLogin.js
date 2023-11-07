import React from 'react';
import style from './KakaoLogin.module.css';
import { Link } from 'react-router-dom';

function Content() {

    return (
        <div className={style.content}>
            <Login/>
        </div>
    );
}

function KakaoLogin(props) {
    return (
        <div className={style.container}>
            <Content/>
        </div>
    );
}

function Box(){
    return (
        <div className={style.box}>
            <label className={style.label}>Kakao 계정으로 로그인</label>
            <h2><br></br>로그인</h2>
            <input className={style.email} type="text" name="email" placeholder='이메일'/>
            <input className={style.password} type="password" name="password" placeholder='패스워드'/>
            <input className={style.checkbox} type="checkbox"/>
            <label className={style.loginment}>로그인 상태 유지</label>
            <label className={style.findment}>아이디/비밀번호찾기</label>
            <br></br><br></br>
            <Link to={'/MainPage2'}>
                <span className={style.loginbtn}>로그인</span>
            </Link>
            <span className={style.kakaobtn}>카카오 계정으로 로그인</span>
        </div>
    )
}

function Login() {
    
    return (
            <>
                <div className={style.login}>
                    <Box/>
                </div>
            </>
    );
}

export default KakaoLogin;