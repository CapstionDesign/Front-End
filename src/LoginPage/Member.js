import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LoginFormModal() {

    const [username, setUsername] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    // 서버에 보낼 데이터
    const dataToSend = {
        memberName: username,
        studentNo: '12345',         // 실제 데이터에 따라 수정
        studentStatus: 'Active' 
    };

    // fetch를 사용하여 서버에 POST 요청 보내기
    fetch('http://localhost:8080/api/v1/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // 서버 응답에 대한 처리
        console.log('서버 응답:', data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        회원가입
                    </Button>
                </Form>
            </Modal.Body>
        </>
  );
}

export default LoginFormModal;