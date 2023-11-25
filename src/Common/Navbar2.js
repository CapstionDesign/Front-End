import React, {useState} from 'react';
import style from './Navbar2.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar2() {
    return(
        <Navbar1/>
    )
}

function Navbar1() {

    const navigate = useNavigate();
    const [isBold1, setIsBold1] = useState(false);
    const [isBold2, setIsBold2] = useState(false);
    const [isBold3, setIsBold3] = useState(false);
    const [isBold4, setIsBold4] = useState(false);

    const handleButtonClick1 = () => {
        // 버튼 클릭 시 다른 페이지로 이동
        navigate('/manage');
        setIsBold1(true);
    };
    const handleButtonClick2 = () => {
        // 버튼 클릭 시 다른 페이지로 이동
        navigate('/manage');
        setIsBold2(true);
    };
    const handleButtonClick3 = () => {
        // 버튼 클릭 시 다른 페이지로 이동
        navigate('/manage');
        setIsBold3(true);
    };
    const handleButtonClick4 = () => {
        // 버튼 클릭 시 다른 페이지로 이동
        navigate('/manage');
        setIsBold4(true);
    };

    const [isListVisible1, setListVisible1] = useState(false);
    const [isListVisible2, setListVisible2] = useState(false);
    const [isListVisible3, setListVisible3] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleList1 = () => {
      setListVisible1(!isListVisible1);
      setDropdownOpen(!isDropdownOpen);
    };
    const toggleList2 = () => {
        setListVisible2(!isListVisible2);
        setDropdownOpen(!isDropdownOpen);
      };
    const toggleList3 = () => {
        setListVisible3(!isListVisible3);
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav>
            <button className={style.toggleList1} onClick={toggleList1}>동아리 개설 관리 {isListVisible1 ? '▼' : '►'} </button>
            {isListVisible1 && (
                <ul>
                    <li><a className={style.li1}>
                    <button className={`${isBold1 ? style.boldText1 : ''}`} onClick={handleButtonClick1}>동아리 개설 신청 현황</button></a></li>
                    <li><a className={style.li1}>
                    <button className={`${isBold2 ? style.boldText2 : ''}`} onClick={handleButtonClick2}>동아리 삭제 신청 현황</button></a></li>
                </ul>
            )}
            <br></br>
            <button className={style.toggleList1} onClick={toggleList2}>동아리장 관리 {isListVisible2 ? '▼' : '►'}</button>
            {isListVisible2 && (
                <ul>
                    <li><a className={style.li1}>
                        <button className={`${isBold3 ? style.boldText3 : ''}`} onClick={handleButtonClick3}>동아리장 변경 현황</button></a></li>
                </ul>
            )}
            <br></br>
            <button className={style.toggleList1} onClick={toggleList3}>전체회원 관리 {isListVisible3 ? '▼' : '►'}</button>
            {isListVisible3 && (
                <ul>
                    <li><a className={style.li1}>
                    <button className={`${isBold4 ? style.boldText4 : ''}`} onClick={handleButtonClick4}>전체회원 관리</button></a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar2;