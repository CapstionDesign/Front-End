import style from './Header.module.css';
import { Link } from  'react-router-dom';

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
                <Login/>
                <Signup/>
            </p>
        </div>
    );
}

function Login(){
    return (
        <div>
            <Link to={'/LoginPage'}>
                <p className={style.Login}>로그인</p>
            </Link>
        </div>
    )
}

function Signup(){
    return (
        <div>
            <p className={style.Signup}>회원가입</p>
        </div>
    )
}

export default Header;