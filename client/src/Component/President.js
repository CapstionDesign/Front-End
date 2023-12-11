import React, { useState, useEffect } from 'react';
import style from './President.module.css';
import { Button, Modal, Form } from 'react-bootstrap';

function MyPage(club) {

  const [clubInfo, setClubInfo] = useState({
      name: '맛따라멋따라',
      president: '최승민',
      joinDate: '2023.11.11',
  });

    const clubs = [
        { id: 1, name: 'John Doe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 2, name: 'Jane Smith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 3, name: 'John', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 4, name: 'Smith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 5, name: 'Jooe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 6, name: 'Janith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 7, name: 'Je', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 8, name: 'Ja', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 9, name: 'n Doe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 10, name: 'th', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 11, name: 'Johoe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 12, name: 'Jane Smit', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 13, name: 'John D', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 14, name: 'Jane S', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 15, name: 'John Doe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 16, name: 'Jane Smith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 17, name: 'John', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 18, name: 'Smith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 19, name: 'Jooe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 20, name: 'Janith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 21, name: 'Je', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 28, name: 'Ja', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 29, name: 'n Doe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 210, name: 'th', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 211, name: 'Johoe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 212, name: 'Jane Smit', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
        { id: 213, name: 'John D', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { id: 214, name: 'Jane S', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
      ];

    const itemsPerPage = 10; // 페이지당 아이템 수
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);


    const handleCheckboxChange = (rowId) => {
        if (selectedRows.includes(rowId)) {
              // 이미 선택된 행인 경우 선택 해제
              setSelectedRows(selectedRows.filter(id => id !== rowId));
              setSelectAll(false);
              setSelectedMember(null);
            } else {
              // 선택되지 않은 행인 경우 선택
              setSelectedRows([rowId]);
              setSelectedMember(clubs.find((club) => club.id === rowId));
            }
    };

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedRows(selectAll ? [] : clubs.map(club => club.id));
    };

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(clubs.length / itemsPerPage)));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = clubs.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = Math.ceil(clubs.length / itemsPerPage);

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedMember, setSelectedMember] = useState(null);

    const handleEditMember = (member) => {
      setSelectedMember(member);
      setShowEditModal(true);
    };

    const handleClose = () => {
      setShowEditModal(false); // handleClose 함수 추가
      setShowDeleteModal(false);
    }

    const handleUpdateMember = () => {
      if (selectedMember && selectedMember.id) {
        // onUpdateMember 함수 호출 또는 필요한 로직 추가
        console.log('Update member:', selectedMember.id, 'with position:', selectedPosition);
        handleClose(); // 모달 닫기
      } else {
        console.error('Invalid selected member:', selectedMember);
      }
    };

    const handlePositionChange = (e) => {
      setSelectedPosition(e.target.value);
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
    const handleDeleteClick = () => {
      setShowDeleteModal(true);
    };

    const handleDelete = () => {
      // 여기에서 동아리 삭제 로직을 구현하고, 필요한 경우 서버로 삭제 요청을 보낼 수 있습니다.
      console.log(`Deleting club: ${club.name}, Reason: ${deleteReason}`);
      handleClose();
    };

    return (
        <>
            <div className={style.clubname}>동아리명 : {clubInfo.name}</div>
            <div className={style.name}>회장 : {clubInfo.president}</div>
            <Button className={style.button1}> 동아리 관리</Button>
            <Button className={style.button2}>참가 신청 관리</Button>
            <div className={style.content}>
              <table className={style.clublist}>
                <thead>
                  <tr>
                    <th>
                      <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                          />
                    </th>
                    <th>회원번호</th>
                    <th>회원이름</th>
                    <th>직책</th>
                    <th>학번</th>
                    <th>가입일</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((club) => (
                    <tr key={club.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(club.id)}
                                onChange={() => handleCheckboxChange(club.id)}
                            />
                        </td>
                        <td>{club.id}</td>
                        <td>{club.name}</td>
                        <td>{club.position}</td>
                        <td>{club.number}</td>
                        <td>{club.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`${style.pagination}`}>
                    <Button className={`${style.pageButton} mr-1`} variant="light" onClick={handlePrevPage}>&lt;</Button>
                    {Array.from({ length: pageNumbers }, (_, index) => (
                        <Button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            variant={currentPage === index + 1 ? "primary" : "light"}
                            className={`${style.pageButton} ml-1 mr-1`}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button className={`${style.pageButton} ml-1`} variant="light" onClick={handleNextPage}>&gt;</Button>
            </div>
            <Button className={style.del} onClick={() => handleEditMember(selectedMember)}>회원 정보 변경</Button>
            <Button className={style.sel} onClick={handleDeleteClick}>동아리 삭제</Button>

            <Modal show={showEditModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>회원 정보 변경</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* 선택된 회원 정보 표시 */}
                {selectedMember && (
                  <div>
                    <p>이름: {selectedMember.name}</p>
                    <p>학번: {selectedMember.number}</p>
                    <p>가입일: {selectedMember.joinDate}</p>
                  </div>
                )}
                {/* 직책 선택 드롭다운 */}
                <Form.Group controlId="formPosition">
                  <Form.Label>직책 선택</Form.Label>
                  <Form.Control as="select" value={selectedPosition} onChange={handlePositionChange}>
                    <option value="">직책을 선택하세요</option>
                    <option value="회장">회장</option>
                    <option value="부회장">부회장</option>
                    <option value="일반회원">부원</option>
                    {/* 다른 직책도 필요에 따라 추가 */}
                  </Form.Control>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  닫기
                </Button>
                <Button variant="primary" onClick={handleUpdateMember}>
                  저장
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={showDeleteModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>동아리 삭제</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className={style.clubinfo}>
                  동아리명: {clubInfo.name}
                  <br />
                  동아리회장: {clubInfo.president}
                  <br />
                  신청일: {clubInfo.joinDate}
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
                <Button variant="secondary" onClick={handleClose}>
                  취소
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  삭제
                </Button>
              </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyPage;