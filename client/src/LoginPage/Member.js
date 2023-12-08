import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function LoginFormModal() {

    const [formData, setFormData] = useState({
        memberId: '',
        memberPass: '',
        memberName: ''
      });

      const [message, setMessage] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/v1/members',{
          method:"POST",
          body: JSON.stringify(formData),
          headers:{'Content-Type':'application/json'}
        })
        .then(response=>response.json())
        .then(data => {
          setMessage({ type: 'success', text: '회원가입 성공!' });
          console.log(data);
        })
        .catch(err => {
          setMessage({ type: 'danger', text: '회원가입 실패!' });
          console.log(err)
        })
      }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {message && <Alert variant={message.type}>{message.text}</Alert>}
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formMemberName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" name="memberName"
                            value={formData.memberName} onChange={handleChange} />
                    </Form.Group><br></br>

                    <Form.Group controlId="formMemberId">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control type="text" name="memberId"
                            value={formData.memberId} onChange={handleChange} />
                    </Form.Group><br></br>

                    <Form.Group controlId="formMemberPass">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" name="memberPass"
                            value={formData.memberPass} onChange={handleChange} />
                    </Form.Group><br></br>

                    <Button variant="primary" type="submit">
                        회원가입
                    </Button>
                </Form>
            </Modal.Body>
        </>
  );
}

export default LoginFormModal;