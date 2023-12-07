import React, { useState } from 'react';
import MyPage from '../Component/MyPage';
import style from './Club1.module.css';
import { Link } from 'react-router-dom';

function Club1() {
    
    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content/>
        </div>
    );
}

function Content() {

    const [clubFile, setClubFile] = useState(null);
    const [clubName, setClubName] = useState('');
    const [clubInfo, setClubInfo] = useState('');
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        // 팝업 닫기
        setPopupOpen(false);
      };

    return (
        <div className={style.content}>
            <img src="/img/kakao1.png" className={style.kakao}></img>
            <p className={style.name}>최승민</p>
            <p className={style.school1}>동아리명</p>
            <input className={style.school2} type="text" value={clubName} onChange={(e) => setClubName(e.target.value)}/>
            <p className={style.school5}>동아리 소개</p>
            <input className={style.school6} type="text" value={clubInfo} onChange={(e) => setClubInfo(e.target.value)}/>
            <p className={style.school7}>신청 서류 첨부</p>
            <input className={style.school8} type="file" value={clubFile} onChange={(e) => setClubFile(e.target.value)}/>
            <button className={style.delete} onClick={openPopup}>
                신청하기
            </button>

            {isPopupOpen && (
                <div className={style.popup}>
                    <div>
                        <p>총 1건에 대해 신청되었습니다.</p>
                        <Link to={'/Email3'}><button className={style.confirmButton} onClick={closePopup}>
                        확인
                        </button></Link>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Club1;