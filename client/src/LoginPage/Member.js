import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function LoginFormModal() {

    const [formData, setFormData] = useState({
        memberId: '',
        memberPass: '',
        memberName: ''
      });
    
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
          console.log(data);
        })
        .catch(err => console.log(err))
      }

      /*
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const apiUrl = 'http://localhost:8080/api/v1/members';
          const jsonData = JSON.stringify(formData);
    
          const response = await axios.post(apiUrl, jsonData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          console.log('POST 요청 성공:', response.data);
        } catch (error) {
          console.error('POST 요청 실패:', error);
        }
      };
      */

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formMemberName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" name="memberName"
                            value={formData.memberName} onChange={handleChange} />
                    </Form.Group><br></br>

                    <Form.Group controlId="formMemberId">
                        <Form.Label>로그인</Form.Label>
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