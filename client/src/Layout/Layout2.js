import { Outlet } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Navbar from '../Common/Navbar';

function Layout1() {

    return (
        <div>
            <Header2/>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout1;