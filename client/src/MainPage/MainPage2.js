import React from 'react';
import style from './MainPage2.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MainPage2() {
    return(
        <div>
            <img src="/img/Sahmyook.png" className={style.main1}/><br></br>
            <img src="/img/World.png" className={style.main2}/>
        </div>
    );
}

export default MainPage2;