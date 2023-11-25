import React, {useState, useEffect} from 'react';
import style from './MyPage.module.css';
import Navbar2 from '../Common/Navbar2';
import Content1 from '../Common/Content1';

function MyPage(props) {
    return (
        <div className={style.container}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Navbar2/>
        </div>
    );
}

export default MyPage;