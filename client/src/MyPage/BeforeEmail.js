import React, {useState} from 'react';
import MyPage from '../Component/MyPage';
import style from './BeforeEmail.module.css';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import Email1 from '../MyPage/Email1';

function BeforeEmail() {
    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content/>
        </div>
    );
}

function Content() {

    const [modalShow, setModalShow] = useState(false);

    const handleButtonClick = () => {
        setModalShow(true);
    };

    const handleModalClose = () => {
        setModalShow(false);
    };

    return (
        <div className={style.content}>
            <Modal.Body>
                <Button onClick={handleButtonClick} className={style.school3}>
                        학교인증하기
                </Button>
                <p className={style.delete}>회원 탈퇴하기</p>
            </Modal.Body>
            <Modal show={modalShow} onHide={handleModalClose}>
                <Email1/>
            </Modal>
        </div>
    );
}

export default BeforeEmail;