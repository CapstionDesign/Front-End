import React from 'react';
import MyPage from '../Component/School';
import style from './Email1.module.css';
import { Link } from 'react-router-dom';

function Email(props) {
    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content/>
        </div>
    );
}

function Content() {
    return (
        <div className={style.content}>
            <p className={style.name}>학교 이메일 인증</p>
            <span className={style.school1}>안녕하세요<br></br>
            서비스 이용을 위해 학교 이메일 인증이 필요합니다.<br></br>
            아래 빈칸을 입력하고 이메일을 인증한 후 서비스를 이용할 수 있습니다.</span>
            <p className={style.school2}>본명 : <input id="username" className={style.input}></input></p>
            <p className={style.school3}>학번 : <input id="usercode" className={style.input}></input></p>
            <p className={style.school4}><input id="email" className={style.input}></input>@syuin.ac.kr</p>
            <Link to={'/Email2'}><p className={style.button}>코드 전송</p></Link>
        </div>
    );
}

export default Email;