import React, { useState, useEffect } from 'react';
import style from './President.module.css';
import { Button, Modal } from 'react-bootstrap';

function MyPage() {

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
      ];

    const itemsPerPage = 5; // 페이지당 아이템 수
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);


    const handleCheckboxChange = (rowId) => {
        if (selectedRows.includes(rowId)) {
            // 이미 선택된 행인 경우 선택 해제
            setSelectedRows(selectedRows.filter(id => id !== rowId));
            setSelectAll(false);
            } else {
            // 선택되지 않은 행인 경우 선택
            setSelectedRows([...selectedRows, rowId]);
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

    return (
        <>
            <div className={style.clubname}>동아리명 : 맛따라멋따라</div>
            <div className={style.name}>회장 : 최승민</div>
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
            </div>
        </>
    );
}

export default MyPage;