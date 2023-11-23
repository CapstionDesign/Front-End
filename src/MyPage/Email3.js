import React, { useState } from 'react';
import MyPage from '../Component/MyPage';
import style from './Email3.module.css';
import { Link } from 'react-router-dom';

function BeforeEmail(props) {
    const [clubList, setClubList] = useState(["맛따라멋따라", "오아시스", "GDSC", "클래시아"]);
    const [clubStatus, setClubStatus] = useState(["대기중", "대기중", "대기중", "대기중"]);
    const handleClubRegistration = (clubName) => {
        // 전달받은 동아리 이름을 동아리 목록에 추가
        setClubList([...clubList, clubName]);
        setClubStatus([...clubStatus, "대기중"]);
      };

    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content onClubRegistration={handleClubRegistration} clubList={clubList} clubStatus={clubStatus}/>
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
                <ul className={style.custom}>
                    {props.clubList.map((clubName, index) => (
                        <li key={index}>
                            {clubName} - {props.clubStatus[index]}
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