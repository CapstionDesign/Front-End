import style from './Header2.module.css';

function Ment(){
    return (
        <div>
            <p className={style.Header}>Do U Town</p>
        </div>
    );
}

function Header() {
    return (
        <div>
            <p className={style.back}>
                <Ment/>
            </p>
        </div>
    );
}

export default Header;