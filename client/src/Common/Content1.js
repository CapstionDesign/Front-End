import React, {useState, useEffect} from 'react';
import style from './Content1.module.css';

function Content(itemsPerPage){

  const [isPopupOpen, setPopupOpen] = useState(true);

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
        // ... 다른 신청서들
      ];

        const [selectedRange, setSelectedRange] = useState('전체');
      
        const handleRangeClick = (range) => {
          setSelectedRange(range);
          // 선택한 기간에 따른 작업 수행
          // 예: 선택한 기간에 따라 데이터를 가져오거나 다른 동작을 수행
        };
        const ranges = ['전체', '1시간', '1일', '1주', '1개월', '3개월', '6개월'];
        const states = ['승인', '대기', '미승인'];

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
                        <p>John Doe</p><br></br>
                        <p>React Club</p><br></br>
                        <p>2023-01-01</p><br></br>
                        <p>우리 동아리는 React에 관심 있는 사람들을 위한 동아리입니다.</p><br></br>
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
                    <th>ID</th>
                    <th>신청자</th>
                    <th>동아리명</th>
                    <th>동아리소개</th>
                    <th>첨부파일</th>
                    <th>상태</th>
                    <th>신청일</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.id}</td>
                      <td>{application.applicant}</td>
                      <td>{application.clubName}</td>
                      <td>{application.introduction}</td>
                      <td>{application.attachment}</td>
                      <td>{application.status}</td>
                      <td>{application.applicationDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </>
    )
}

export default Content;