import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function LoginFormModal() {

    const [formData, setFormData] = useState({
        memberGrade: '',
        memberId: '',
        memberName: '',
        memberPass: '',
        registDate: '',
        studentDTO: {
          departmentCode: '',
          hakNumber: '',
          studentName: '',
          studentNo: '',
        },
        studentStatus: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8080/api/v1/members', formData);
    
          if (!response.data.success) {
            throw new Error('Failed to add member');
          }
    
          // Handle success (if needed)
        } catch (error) {
          console.error('Error adding member:', error.message);
        }
      };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="memberName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" name="memberName" value={formData.memberName} onChange={handleInputChange} />
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