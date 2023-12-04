import { useState } from 'react';
import style from './Header1.module.css';
import { Link } from  'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Ment(){
    return (
        <div>
            <p className={style.Header}>Do U Town</p>
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

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 로그인 로직을 구현하거나, 부모 컴포넌트에 전달할 수 있음
    console.log('Submitted:', formData);
    handleClose(); // 모달 닫기
  };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const secondModalClose = () => setShowSecondModal(false);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleNextModal = () => {
        setShow(false);
        setShowSecondModal(true);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className={style.Login}>로그인</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>DO U TOWN</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleNextModal}>
                        Login
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSecondModal} onHide={() => setShowSecondModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="아이디를 입력하세요"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        </Form.Group>
                        <br></br>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                        로그인
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

function Signup(){
    return (
        <div>
            <p className={style.Signup}>회원가입</p>
        </div>
    )
}

export default Header;