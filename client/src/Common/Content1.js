import React, { useState, useEffect } from 'react';
import style from './Content1.module.css';
import { Modal, Button } from 'react-bootstrap';

function Content1(){

  const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        // 팝업 닫기
        setPopupOpen(false);
      };

    const applications = [
        { id: 1, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 2, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 3, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 4, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 5, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 6, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 7, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 8, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 9, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 10, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 11, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 12, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 13, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 14, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
        { id: 15, applicant: 'John Doe', clubName: 'Club A', introduction: 'Introduction A', attachment: 'fileA.pdf', status: 'Pending', applicationDate: '2022-12-01' },
        { id: 16, applicant: 'Jane Smith', clubName: 'Club B', introduction: 'Introduction B', attachment: 'fileB.pdf', status: 'Approved', applicationDate: '2022-12-02' },
      ];

        const [selectedRange, setSelectedRange] = useState('전체');
      
        const handleRangeClick = (range) => {
          setSelectedRange(range);
          // 선택한 기간에 따른 작업 수행
          // 예: 선택한 기간에 따라 데이터를 가져오거나 다른 동작을 수행
        };
        const ranges = ['전체', '1시간', '1일', '1주', '1개월', '3개월', '6개월'];
        const states = ['승인', '대기', '미승인'];

        const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // 현재 날짜 객체 생성
        const currentDateObj = new Date();

        // 연, 월, 일 정보 가져오기
        const year = currentDateObj.getFullYear();
        const month = currentDateObj.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = currentDateObj.getDate();

        // 현재 날짜 문자열 생성
        const formattedDate = `${year}-${month}-${day}`;

        // 현재 날짜 업데이트
        setCurrentDate(formattedDate);
    }, []);

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(applications.length / itemsPerPage)));
    };

    const itemsPerPage = 6; // 페이지당 아이템 수
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedMember, setSelectedMember] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

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

    const handleCheckboxChange = (rowId) => {
        if (selectedRows.includes(rowId)) {
              // 이미 선택된 행인 경우 선택 해제
              setSelectedRows(selectedRows.filter(id => id !== rowId));
              setSelectAll(false);
              setSelectedMember(null);
            } else {
              // 선택되지 않은 행인 경우 선택
              setSelectedRows([rowId]);
              setSelectedMember(applications.find((application) => application.id === rowId));
            }
    };

    const handleSelectAllChange = () => {
      setSelectAll(!selectAll);
      setSelectedRows(selectAll ? [] : applications.map(application => application.id));
  };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const app = applications.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = Math.ceil(applications.length / itemsPerPage);

    return(
      <>
        {isPopupOpen && (
                  <div className={style.popup}>
                      <div className={style.left}>
                        <p>신청자</p><br></br>
                        <p>동아리명</p><br></br>
                        <p>신청일</p><br></br>
                        <p>동아리소개</p><br></br>
                        <p>첨부파일</p>
                      </div>
                      <div className={style.right}>
                        <p>최승민</p><br></br>
                        <p>맛따라멋따라</p><br></br>
                        <p>{currentDate}</p><br></br>
                        <p>우리 동아리는 맛집탐방에 관심 있는 사람들을 위한 동아리입니다.</p><br></br>
                        <p>첨부파일.pdf</p>
                      </div>
                      <div className={style.button}>
                        <button className={style.leftbutton} onClick={closePopup}>승인</button>
                        <button className={style.rightbutton} onClick={closePopup}>반려</button>
                      </div>
                  </div>
              )}
        <div className={style.content1}>
            <div className={style.content2}>
                동아리 개설 신청 현황
            </div>
            <div className={style.content3}>

                <div><span style={{ marginRight: '100px' }}>기간</span>
                    {ranges.map((range) => (
                        <button
                        key={range}
                        onClick={() => handleRangeClick(range)}
                        style={{ 
                            cursor: 'pointer',
                            marginRight: '20px',
                        }}
                        >
                        {range}
                        </button>
                    ))}
                </div><br></br>

                <div><span style={{ marginRight: '100px' }}>상태</span>
                    {states.map((state) => (
                        <button
                        key={state}
                        onClick={() => handleRangeClick(state)}
                        style={{ 
                            cursor: 'pointer',
                            marginRight: '20px',
                        }}
                        >
                        {state}
                        </button>
                    ))}
                </div><br></br>

                <div>동아리명
                    <input type="text" style={{ marginLeft: '77px' }}/>
                    <button style={{ backgroundColor: 'white', border: '1px solid black', marginLeft: '7px' }}>
                    검색</button>
                </div>
            </div>

            <div className={style.content4}>
              <table className={style.application}>
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
                    <th>신청자</th>
                    <th>동아리명</th>
                    <th>동아리소개</th>
                    <th>상태</th>
                    <th>신청일</th>
                  </tr>
                </thead>
                <tbody>
                  {app.map((application) => (
                    <tr key={application.id}>
                      <td>
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(application.id)}
                                onChange={() => handleCheckboxChange(application.id)}
                            />
                      </td>
                      <td>{application.id}</td>
                      <td>{application.applicant}</td>
                      <td>{application.clubName}</td>
                      <td>{application.introduction}</td>
                      <td>{application.status}</td>
                      <td>{application.applicationDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
          <Button className={style.del} onClick={() => handleEditMember(selectedMember)}>상세보기</Button>

          <Modal show={showEditModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>상세정보</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedMember && (
                  <div>
                    <p>신청자 : {selectedMember.applicant}</p>
                    <p>동아리명 : {selectedMember.clubName}</p>
                    <p>신청일 : {selectedMember.applicationDate}</p>
                    <p>동아리소개 : {selectedMember.introduction}</p>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleUpdateMember}>
                  승인
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  반려
                </Button>
              </Modal.Footer>
            </Modal>
      </>
    )
}

export default Content1;