import style from './Navbar.module.css';

function Ment() {
    return (
        <div>
            <p className={style.left}>
                백엔드 기업실무 캡스톤디자인<br></br>
                Team 부르즈칼리파<br></br>
                김재현, 김준열, 조동훈, 최승민<br></br>
                Copyright 2023 Sahmyook University All right Reserved.
            </p>
            <p className={style.right}>
                01795 서울특별시 노원구 화랑로 815<br></br>
                815, Hwarang-ro, Nowon-gu, Seoul, 01795 Rep. of KOREA<br></br>
                TEL.(02) 3399 - 3636<br></br>
                FAX.(02) 979 - 5318
            </p>
        </div>
    );
}

function Navbar() {
    return (
        <div>
            <p className={style.back}>
            <Ment/>
            </p>
        </div>
    );
}

export default Navbar;