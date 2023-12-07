import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LoginFormModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  return (
    <>
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
    </>
  );
}

export default LoginFormModal;