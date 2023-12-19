import React, { useEffect, useState } from 'react';
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

    const [currentDate, setCurrentDate] = useState('');
    const [memberName, setMemberName] = useState('');
    const [hakNumber, setHakNumber] = useState('');

    useEffect(() => {
        // 현재 날짜 객체 생성
        const currentDateObj = new Date();

        // 연, 월, 일 정보 가져오기
        const year = currentDateObj.getFullYear();
        const month = currentDateObj.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = currentDateObj.getDate();

        // 현재 날짜 문자열 생성
        const formattedDate = `${year}-${month}-${day}`;

        // 현재 날짜 업데이트
        setCurrentDate(formattedDate);
    }, []);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);

    const handleModal1Open = () => setShowModal1(true);

    const handleModal2Open = () => {
        setShowModal1(false); // 첫 번째 모달 닫기
        setShowModal2(true); // 두 번째 모달 열기
    };

    const memberNo = '1234'

    const handleModal3Open = async () => {
        setShowModal2(false); // 첫 번째 모달 닫기
        setShowModal3(true); // 두 번째 모달 열기

        try{
            const response = await fetch(`http://localhost:8080/api/v1/members/students/${memberNo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberName,
                    hakNumber,
                    // email,
                    memberNo,
                }),
            });

            // 서버 응답 확인
            if (response.ok) {
            console.log('Data sent successfully!');
            // 여기에서 추가적인 로직 수행 가능
            } else {
            console.error('Failed to send data to the server.');
            }
        } catch (error) {
            console.error('An error occurred while sending data to the server:', error);
        }
    };

    const handleModal4Open = () => {
        setShowModal3(false); // 첫 번째 모달 닫기
        setShowModal4(true); // 두 번째 모달 열기
    };

    const handleModal5Open = () => {
        setShowModal4(false); // 첫 번째 모달 닫기
        setShowModal5(true); // 두 번째 모달 열기
    };

    const handleModal6Open = () => {
        setShowModal4(false); // 첫 번째 모달 닫기
        setShowModal6(true); // 두 번째 모달 열기
    };

    const handleModal1Close = () => setShowModal1(false);
    const handleModal2Close = () => setShowModal2(false);
    const handleModal3Close = () => setShowModal3(false);
    const handleModal4Close = () => setShowModal4(false);
    const handleModal5Close = () => setShowModal5(false);
    const handleModal6Close = () => setShowModal6(false);

    const [clubList, setClubList] = useState([
        { clubName : '맛따라멋따라', clubStatus : '(대기중)'},
        { clubName : '클래시아', clubStatus : '(대기중)'},
        { clubName : '오아시스', clubStatus : '(대기중)'},
    ]);

    const [clubFile, setClubFile] = useState(null);
    const [clubName, setClubName] = useState('');
    const [clubInfo, setClubInfo] = useState('');
    const [isPopupOpen1, setPopupOpen1] = useState(false);
    const [isPopupOpen2, setPopupOpen2] = useState(false);

    const openPopup1 = () => {
        setPopupOpen1(true);
    };
    const openPopup2 = () => {
        setPopupOpen2(true);
    };

    const closePopup1 = () => {
        // 팝업 닫기
        setPopupOpen1(false);
        setShowModal4(true);
        setShowModal5(false);
    };
    const closePopup2 = () => {
        // 팝업 닫기
        setPopupOpen2(false);
        setShowModal4(true);
        setShowModal5(false);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);

    const items = [
        { id: 1, name: '맛따라멋따라', description: '맛집탐방 동아리' },
        { id: 2, name: '클래시아', description: '음악밴드 동아리' },
        { id: 3, name: '오아시스', description: '나눔봉사 동아리' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setSelectedItem1(false);
    };

    const handleItemClick = (item) => {
        setSelectedItem1(item.name);
        setSelectedItem2(item.description);
        setIsOpen(false);
    };

    // const [email, setEmail] = useState('');
    // const [memberNo, setMemberNo] = useState(''); 

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
                                <Button variant="secondary" className={style.delete}>회원 탈퇴하기</Button>
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
                            <input type="hidden" id="memberNo" value={memberNo} />
                            <p className={style.school2}>본명 
                                <input id="memberName" className={style.input} onChange={(e) => setMemberName(e.target.value)}></input></p>
                            <p className={style.school3}>학번 
                                <input id="hakNumber" className={style.input} onChange={(e) => setHakNumber(e.target.value)}></input></p>
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
                            <Button onClick={handleModal6Open} className={style.school14}>동아리 참가 신청</Button>
                            <Button className={style.del}><Link to={'/president'}>동아리 관리하기</Link></Button>
                            <Button variant="secondary" className={style.ete}>회원 탈퇴하기</Button>
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
                            <Button className={style.delete2} onClick={openPopup1}>
                                신청하기
                            </Button>

                            {isPopupOpen1 && (
                                <div className={style.popup1}>
                                    <div>
                                        <p>총 1건에 대해 신청되었습니다.</p>
                                        <Button className={style.confirmButton} onClick={closePopup1}>
                                        확인
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                    </div>
                </div>
            </Modal>

            <Modal show={showModal6} onHide={handleModal6Close}>
                <div className={style.BeforeEmail}>
                    <MyPage/>
                    <div className={style.content}>
                        <Modal.Body>
                            <img src="/img/kakao1.png" className={style.kakao}></img>
                            <p className={style.name}>최승민</p><br></br><br></br>
                            <Button onClick={toggleDropdown}>동아리 찾아보기</Button>
                            <div className={style.dropdown}>
                                {isOpen && (
                                    <ul className={style.list}>
                                        {items.map((item, index) => (
                                            <li className={style.li} key={index} onClick={() => handleItemClick(item)}>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {selectedItem1 && 
                                <p className={style.select}><br></br>- {selectedItem1} -<br></br>
                                {selectedItem2}<br></br><br></br>
                                <Button className={style.but} onClick={openPopup2}>신청하기</Button></p>}

                                {isPopupOpen2 && (
                                    <div className={style.popup2}>
                                        <div className={style.left}>
                                            <p>신청자</p><br></br>
                                            <p>동아리명</p><br></br>
                                            <p>신청일</p><br></br>
                                            <p>지원동기</p><br></br>
                                        </div>
                                        <div className={style.right}>
                                            <p>최승민</p><br></br>
                                            <p>{selectedItem1}</p><br></br>
                                            <p>{currentDate}</p><br></br>
                                            <p><input className={style.int} type='text'/></p><br></br>
                                        </div>
                                        <div className={style.button}>
                                            <Button className={style.confirmButton2} onClick={closePopup2}>제출</Button>
                                        </div>
                                    </div>
                                )}

                            </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br><br></br><br></br>
                            <p>
                                참가가 신청 된 동아리는 동아리장 또는 관리자의 확인 후 가입입이 완료 됩니다.
                                신청 확인에 시간이 조금 걸릴 수 있으니 조금만 기다려 주세요!
                            </p>
                        </Modal.Body>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Header2;