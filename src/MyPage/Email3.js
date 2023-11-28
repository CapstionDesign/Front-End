import React, { useState } from 'react';
import MyPage from '../Component/MyPage';
import style from './Email3.module.css';
import { Link } from 'react-router-dom';

function BeforeEmail() {
    const [clubList, setClubList] = useState([
        { clubName : '맛따라멋따라', clubStatus : '대기중'},
        { clubName : '클래시아', clubStatus : '대기중'},
        { clubName : 'GDSC', clubStatus : '대기중'},
    ]);

    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content clubList={clubList} setClubList={setClubList}/>
        </div>
    );
}

function Content(props) {
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
                <ul className={style.custom1}>
                    {props.clubList.map((club, index) => (
                        <li key={index}>
                            {club.clubName}
                        </li>
                    ))}
                </ul>
                <ul className={style.custom2}>
                    {props.clubList.map((club, index) => (
                        <li key={index}>
                            {club.clubStatus}
                        </li>
                    ))}
                </ul>
            </p>
            <p className={style.school3}>동아리 개설 신청</p>
            <p className={style.school4}>동아리 참가 신청</p>
            <p className={style.delete}>회원 탈퇴하기</p>
            <Link to={'/PhaserGame'}><p className={style.button}>코드 확인</p></Link>
        </div>
    );
}

export default BeforeEmail;