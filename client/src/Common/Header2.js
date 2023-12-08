import React, {useState} from 'react';
import style from './Header2.module.css';
import { Link } from  'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import MyPage from '../Component/MyPage';
import School from '../Component/School';

function Header2() {
    return (
        <div>
            <p className={style.back}>
                <div>
                    <img src="/img/suya.png" alt="Image 1" className={style.suya}/>
                    <p className={style.Header}>Do U Town</p>
                    <img src="/img/suho.png" alt="Image 1" className={style.suho}/>
                </div>
                <div>
                    <Link to={'/MainPage1'}>
                        <Button variant="light" className={style.Login}>로그아웃</Button>
                    </Link>
                </div>
                <CustomModal/>
            </p>
        </div>
    );
}

function CustomModal(){

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);

    const handleModal1Open = () => setShowModal1(true);

    const handleModal2Open = () => {
        setShowModal1(false); // 첫 번째 모달 닫기
        setShowModal2(true); // 두 번째 모달 열기
    };

    const handleModal3Open = () => {
        setShowModal2(false); // 첫 번째 모달 닫기
        setShowModal3(true); // 두 번째 모달 열기
    };

    const handleModal4Open = () => {
        setShowModal3(false); // 첫 번째 모달 닫기
        setShowModal4(true); // 두 번째 모달 열기
    };

    const handleModal5Open = () => {
        setShowModal4(false); // 첫 번째 모달 닫기
        setShowModal5(true); // 두 번째 모달 열기
    };

    const handleModal1Close = () => setShowModal1(false);
    const handleModal2Close = () => setShowModal2(false);
    const handleModal3Close = () => setShowModal3(false);
    const handleModal4Close = () => setShowModal4(false);
    const handleModal5Close = () => setShowModal5(false);

    const [clubList, setClubList] = useState([
        { clubName : '맛따라멋따라', clubStatus : '(대기중)'},
        { clubName : '클래시아', clubStatus : '(대기중)'},
        { clubName : 'GDSC', clubStatus : '(대기중)'},
    ]);

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
        setShowModal4(true);
        setShowModal5(false);
    };


    return (
        <>
            <Button variant="light" onClick={handleModal1Open} className={style.Signup}>마이페이지</Button>

            <Modal show={showModal1} onHide={handleModal1Close} className={style.modal}>
                <div className={style.BeforeEmail}>
                    <MyPage/>
                        <div className={style.content}>
                            <Modal.Body>
                                <Button onClick={handleModal2Open} className={style.school}>
                                        학교인증하기
                                </Button>
                                <Button className={style.delete}>회원 탈퇴하기</Button>
                            </Modal.Body>
                        </div>
                </div>
            </Modal>

            <Modal show={showModal2} onHide={handleModal2Close}>
                <School/>
                    <div className={style.content2}>
                        <Modal.Body>
                            <span className={style.school1}>안녕하세요<br></br>
                            서비스 이용을 위해 학교 이메일 인증이 필요합니다.<br></br>
                            아래 빈칸을 입력하고 이메일을 인증한 후 서비스를 이용할 수 있습니다.</span>
                            <p className={style.school2}>본명 <input id="username" className={style.input}></input></p>
                            <p className={style.school3}>학번 <input id="usercode" className={style.input}></input></p>
                            <p className={style.school4}>이메일 <input id="email" className={style.input}></input>@syuin.ac.kr</p>
                            <Button onClick={handleModal3Open} className={style.button1}>코드 전송</Button>
                        </Modal.Body>
                    </div>
            </Modal>

            <Modal show={showModal3} onHide={handleModal3Close}>
                <div className={style.BeforeEmail}>
                    <MyPage/>
                    <div className={style.content}>
                        <Modal.Body>
                            <span className={style.school5}>이메일이 전송되었습니다.<br></br>
                            학교 이메일을 확인한 후 전송된 코드를 입력해주세요.</span>
                            <p className={style.school6}><input id="emailcode" className={style.input}></input></p>
                            <Button onClick={handleModal4Open} className={style.button1}>코드 확인</Button>
                        </Modal.Body>
                    </div>
                </div>
            </Modal>

            <Modal show={showModal4} onHide={handleModal4Close}>
                <div className={style.BeforeEmail}>
                    <MyPage/>
                    <div className={style.content}>
                        <Modal.Body>
                            <img src="/img/kakao1.png" className={style.kakao}></img>
                            <p className={style.name}>최승민</p>
                            <p className={style.school7}>이름</p>
                            <p className={style.school8}>최승민</p>
                            <p className={style.school9}>학번</p>
                            <p className={style.school10}>2019101007</p>
                            <p className={style.school11}>동아리 목록</p>
                            <p className={style.school12}>
                                <ul className={style.custom1}>
                                    {clubList.map((club, index) => (
                                        <li key={index}>
                                            {club.clubName}
                                        </li>
                                    ))}
                                </ul>
                                <ul className={style.custom2}>
                                    {clubList.map((club, index) => (
                                        <li key={index}>
                                            {club.clubStatus}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <Button onClick={handleModal5Open} className={style.school13}>동아리 개설 신청</Button>
                            <Button className={style.school14}>동아리 참가 신청</Button>
                            <Button className={style.delete}>회원 탈퇴하기</Button>
                        </Modal.Body>
                    </div>
                </div>
            </Modal>

            <Modal show={showModal5} onHide={handleModal5Close}>
                <div className={style.BeforeEmail}>
                    <MyPage/>
                    <div className={style.content}>
                        <Modal.Body>
                            <img src="/img/kakao1.png" className={style.kakao}></img>
                            <p className={style.name}>최승민</p>
                            <p className={style.school15}>동아리명</p>
                            <input className={style.school16} type="text" value={clubName} onChange={(e) => setClubName(e.target.value)}/>
                            <p className={style.school17}>동아리 소개</p>
                            <input className={style.school18} type="text" value={clubInfo} onChange={(e) => setClubInfo(e.target.value)}/>
                            <p className={style.school19}>신청 서류 첨부</p>
                            <input className={style.school20} type="file" value={clubFile} onChange={(e) => setClubFile(e.target.value)}/>
                            <Button className={style.delete2} onClick={openPopup}>
                                신청하기
                            </Button>

                            {isPopupOpen && (
                                <div className={style.popup}>
                                    <div>
                                        <p>총 1건에 대해 신청되었습니다.</p>
                                        <Button className={style.confirmButton} onClick={closePopup}>
                                        확인
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Header2;