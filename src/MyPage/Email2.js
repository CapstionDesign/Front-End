import React from 'react';
import MyPage from '../Component/School';
import style from './Email2.module.css';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';

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
            <span className={style.school1}>이메일이 전송되었습니다.<br></br>
            학교 이메일을 확인한 후 전송된 코드를 입력해주세요.</span>
            <p className={style.school2}><input id="emailcode" className={style.input}></input></p>
            <Link to={'/Email3'}><Button className={style.button}>코드 확인</Button></Link>
        </div>
    );
}

export default Email;