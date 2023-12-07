import { useState } from 'react';
import style from './Header1.module.css';
import { Button, Modal } from 'react-bootstrap';
import Login from '../LoginPage/Login';
import Member from '../LoginPage/Member';

function Header1() {
    return (
        <div>
            <p className={style.back}>
                <div>
                    <p className={style.Header}>DO U TOWN</p>
                </div>
                <Log/>
                <Signup/>
            </p>
        </div>
    );
}

function Log(){

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <>
            <Button variant="light" onClick={handleShow1} className={style.Login}>로그인</Button>
            <Modal show={show1} onHide={handleClose1}>
                <Login/>
            </Modal>
        </>
    )
}

function Signup(){

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <div>
            <Button variant="light" onClick={handleShow2} className={style.Signup}>회원가입</Button>
            <Modal show={show2} onHide={handleClose2}>
                <Member/>
            </Modal>
        </div>
    )
}

export default Header1;