import React, {useState, useEffect} from 'react';
import style from './President.module.css';

function MyPage() {

    const clubs = [
        { name: 'John Doe', position: 'member', number: '2019101000', joinDate: '2023.11.11' },
        { name: 'Jane Smith', position: 'member', number: '2033101000', joinDate: '2033.11.11' },
      ];

    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (rowId, event) => {
        if (selectedRows.includes(rowId)) {
            // 이미 선택된 행인 경우 선택 해제
            setSelectedRows(selectedRows.filter(name => name !== rowId));
            } else {
            // 선택되지 않은 행인 경우 선택
            setSelectedRows([...selectedRows, rowId]);
            }
    };

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedRows(selectAll ? [] : clubs.map(club => club.name));
    };

    return (
        <>
            <div className={style.clubname}>동아리명 : 맛따라멋따라</div>
            <div className={style.name}>회장 : 최승민</div>
            <button className={style.button1}> 동아리 관리</button>
            <button className={style.button2}>참가 신청 관리</button>
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
                    <th>회원이름</th>
                    <th>직책</th>
                    <th>학번</th>
                    <th>가입일</th>
                  </tr>
                </thead>
                <tbody>
                  {clubs.map((club) => (
                    <tr key={club.name}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(club.name)}
                                onChange={() => handleCheckboxChange(club.name)}
                            />
                        </td>
                        <td>{club.name}</td>
                        <td>{club.position}</td>
                        <td>{club.number}</td>
                        <td>{club.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </>
    );
}

export default MyPage;