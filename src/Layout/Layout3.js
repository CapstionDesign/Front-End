import { Outlet } from 'react-router-dom';
import Header3 from '../Common/Header3';
import Navbar from '../Common/Navbar';

function Layout1() {

    return (
        <div>
            <Header3/>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout1;