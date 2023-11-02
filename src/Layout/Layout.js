import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Navbar from '../Common/Navbar';

function Layout() {

    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout;