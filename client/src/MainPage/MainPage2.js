import React from 'react';
import style from './MainPage2.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function MainPage2() {
    return(
        <div>
            <img src="/img/Sahmyook.png" className={style.main1}/><br></br>
            <Link to={'/GameStart'}>
                <img src="/img/World.png" className={style.main2}/>
            </Link>
        </div>
    );
}

export default MainPage2;