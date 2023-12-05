import { useState } from 'react';
import style from './Header2.module.css';
import { Link } from  'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import BeforeEmail from '../MyPage/BeforeEmail';

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
                <Login/>
                <Signup/>
            </p>
        </div>
    );
}

function Login(){
    return (
        <div>
            <Link to={'/MainPage1'}>
                <Button variant="light" className={style.Login}>로그아웃</Button>
            </Link>
        </div>
    )
}

function Signup(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="light" onClick={handleShow} className={style.Signup}>마이페이지</Button>
            <Modal show={show} onHide={handleClose}>
                <BeforeEmail/>
            </Modal>
        </div>
    )
}

export default Header;