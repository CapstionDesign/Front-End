import React, {useState, useEffect} from 'react';
import style from './MyPage.module.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function Box(){

    return (
        <div className={style.box}>
                <Modal.Header className={style.title}>
                    <Modal.Title>마이페이지</Modal.Title>
                </Modal.Header>
        </div>
    )
}

export default Box;