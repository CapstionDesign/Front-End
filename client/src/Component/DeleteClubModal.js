import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const DeleteClubModal = ({ club, show, onHide }) => {
  const [deleteReason, setDeleteReason] = useState('');

  const handleDelete = () => {
    // 여기에서 동아리 삭제 로직을 구현하고, 필요한 경우 서버로 삭제 요청을 보낼 수 있습니다.
    console.log(`Deleting club: ${club.name}, Reason: ${deleteReason}`);
    onHide(); // 모달 닫기
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>동아리 삭제</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          동아리명: {club.name}
          <br />
          동아리회장: {club.president}
          <br />
          신청일: {club.joinDate}
        </p>
        <Form.Group controlId="deleteReason">
          <Form.Label>삭제사유:</Form.Label>
          <Form.Control
            type="text"
            placeholder="삭제사유를 입력하세요"
            value={deleteReason}
            onChange={(e) => setDeleteReason(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteClubModal;