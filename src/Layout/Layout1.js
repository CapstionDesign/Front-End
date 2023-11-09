import { Outlet } from 'react-router-dom';
import Header1 from '../Common/Header1';
import Navbar from '../Common/Navbar';

function Layout1() {

    return (
        <div>
            <Header1/>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout1;