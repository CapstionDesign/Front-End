import { useState } from 'react';
import style from './Header1.module.css';
import { Button, Modal } from 'react-bootstrap';
import Login from '../LoginPage/Login';

function Ment(){
    return (
        <div>
            <p className={style.Header}>DO U TOWN</p>
        </div>
    );
}

function Header() {
    return (
        <div>
            <p className={style.back}>
                <Ment/>
                <Log/>
                <Signup/>
            </p>
        </div>
    );
}

function Log(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow} className={style.Login}>로그인</Button>
            <Modal show={show} onHide={handleClose}>
                <Login/>
            </Modal>
        </>
    )
}

function Signup(){
    return (
        <div>
            <Button variant="light" className={style.Signup}>회원가입</Button>
        </div>
    )
}

export default Header;