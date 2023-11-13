import React from 'react';
import style from './School.module.css';
import { Link } from 'react-router-dom';

function Content() {

    return (
        <div className={style.content}>
            <Box/>
        </div>
    );
}

function School(props) {
    return (
        <div className={style.container}>
            <Content/>
        </div>
    );
}

function Box(){
    return (
        <div className={style.box}>
            <label className={style.label}><a className={style.my}>학교 인증하기</a>
                <a className={style.xbtn}>
                    <Link className={style.x} to={'/MainPage1'}>X</Link>
                </a>
            </label>
        </div>
    )
}

export default School;