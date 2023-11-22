import React, {useState, useEffect} from 'react';
import style from './LoginPage.module.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

    function Content() {

        return (
            <div className={style.content}>
                <Login/>
            </div>
        );
    }

    function Login() {

        const [showModal, setShowModal] = useState(false);
        const handleCloseModal = () => setShowModal(false);

        useEffect(() => {
            setShowModal(true);
        }, []);

        return(
            <div className={style.login}>
                <Modal.Dialog show={showModal} onHide={handleCloseModal}>
                    <Modal.Header><br></br>
                        <h3>Sign in to 두유타운</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <Link to={'/KakaoLogin'}>
                            <p className={style.kakao}>Login with Kakao</p>
                        </Link>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }

    function LoginPage(props) {
        return (
            <>
                <Content/>
            </>
        );
    }

    export default LoginPage;