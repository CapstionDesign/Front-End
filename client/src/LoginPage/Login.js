import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // CSRF 토큰을 받아오는 요청
      const csrfTokenResponse = await axios.get('http://localhost:8080/csrf-token');

      // CSRF 토큰을 헤더에 설정
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfTokenResponse.data.token;

      // 로그인 요청
      const loginResponse = await axios.post('http://localhost:8080/login', formData);

      // 로그인 성공 처리
      console.log('Login successful:', loginResponse.data);
      handleClose(); // 모달 닫기
    } catch (error) {
      // 로그인 실패 처리
      console.error('Login failed:', error);
    }
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" type="submit"><Link to={'/Mainpage2'}>
                          로그인</Link>
                        </Button>
                        <Button variant="secondary" type="submit"><Link to={'/Manage1'}>
                          관리자</Link>
                        </Button>
                </Modal.Footer>
    </>
  );
}

export default LoginFormModal;