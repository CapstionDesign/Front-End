import React from 'react';
import style from './MainPage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MainPage() {
    return(
        <div className={style.container}>
            <div className={style.main}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <Carousel showStatus={false} showThumbs={false} z-index={0}>
                    <div>
                        <img src="/img/image1.png" alt="Image 1" />
                    </div>
                    <div>
                        <img src="/img/image2.png" alt="Image 2" />
                    </div>
                    <div>
                        <img src="/img/image3.png" alt="Image 3" />
                    </div>
                    <div>
                        <img src="/img/image4.png" alt="Image 4" />
                    </div>
                </Carousel></div>
                <br></br><br></br><br></br><br></br>
            </div>
            <Main2/>
            <Main3/>
            <Main4/>
            <Main5/>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}

function Main2(){
    return(
        <div className={style.layout}>
                <img src="/img/Main2.png" className={style.main2}/>
                <div>
                    <p class={style.text1}>동아리 회원들과 채팅하기!</p>
                    <p class={style.text2}>각 동아리방에서 부원들과</p>
                    <p class={style.text2}>자유롭게 소통할 수 있습니다.</p>
                </div>
        </div>
    );
}

function Main3(){
    return(
        <div className={style.layout}>
                <div>
                    <p class={style.text3}>우리만의 동아리방 꾸미기!</p>
                    <p class={style.text4}>각 동아리마다 동아리방을 부여 받아</p>
                    <p class={style.text4}>각자 원하는대로 꾸밀 수 있습니다.</p>
                </div>
            <img src="/img/Main3.png" className={style.main3}/>
        </div>
    );
}

function Main4(){
    return(
        <div className={style.layout}>
                <img src="/img/Main4.png" className={style.main2}/>
                <div>
                    <p class={style.text1}>동아리 만들기! 신청하기!</p>
                    <p class={style.text2}>원하는 동아리가 있으면 만들 수 있고</p>
                    <p class={style.text2}>부원들을 받을 수 있습니다.</p>
                </div>
        </div>
    );
}

function Main5(){
    return(
        <div className={style.layout}>
                <div>
                    <p class={style.text3}>학교 건물로 구성된 월드!</p>
                    <p class={style.text4}>학교건물과 똑같이 구성되어있고</p>
                    <p class={style.text4}>원하는 건물에 입장할 수 있습니다.</p>
                </div>
            <img src="/img/Main5.png" className={style.main3}/>
        </div>
    );
}

export default MainPage;