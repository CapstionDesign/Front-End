import React, {useState, useEffect} from 'react';
import style from './MyPage.module.css';
import Navbar2 from '../Common/Navbar2';
import Content1 from '../Common/Content1';

function MyPage() {
    return (
            <div className={style.content}>
                <Navbar2/>
                <Content1/>
            </div>
    );
}

export default MyPage;