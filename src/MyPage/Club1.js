import React from 'react';
import MyPage from '../Component/MyPage';
import style from './Club1.module.css';
import { Link } from 'react-router-dom';

function Club1(props) {
    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content/>
        </div>
    );
}

function Content() {

    const fruits = ['맛따라멋따라', '클래시아', '플레이그', '오아시스'];

    return (
        <div className={style.content}>
            <img src="/img/kakao1.png" className={style.kakao}></img>
            <p className={style.name}>최승민</p>
            <p className={style.school1}>이름</p>
            <p className={style.school2}>최승민</p>
            <p className={style.school5}>학번</p>
            <p className={style.school6}>2019101007</p>
            <p className={style.school7}>동아리 목록</p>
            <p className={style.school8}>
            <ul className={style.custom}>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            </p>
            <p className={style.delete}>회원 탈퇴하기</p>
        </div>
    );
}

export default Club1;