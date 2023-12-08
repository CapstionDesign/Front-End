import style from './Header2.module.css';

function Header() {
    return (
        <div>
            <p className={style.back}>
            <div>
                <img src="/img/suya.png" alt="Image 1" className={style.suya}/>
                <p className={style.Header}>Do U Town</p>
                <img src="/img/suho.png" alt="Image 1" className={style.suho}/>
            </div>
            </p>
        </div>
    );
}

export default Header;