import React, {useState, useEffect} from 'react';
import style from './School.module.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function Box(){
    
    return (
        <div className={style.box}>
            <Modal.Header className={style.b}>
                    <Modal.Title>학교 이메일 인증</Modal.Title>
            </Modal.Header>
        </div>
    )
}

export default Box;