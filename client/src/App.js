import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout1 from './Layout/Layout1';
import Layout2 from './Layout/Layout2';
import Layout3 from './Layout/Layout3';
import LoginPage from './LoginPage/LoginPage';
import Login from './LoginPage/Login';
import KakaoLogin from './LoginPage/KakaoLogin';
import MainPage1 from './MainPage/MainPage1';
import MainPage2 from './MainPage/MainPage2';
import BeforeEmail from './MyPage/BeforeEmail';
import MyPage from './Component/MyPage';
import School from './Component/School';
import Email1 from './MyPage/Email1';
import Email2 from './MyPage/Email2';
import Email3 from './MyPage/Email3';
import GameStart from "./World/GameStart";
import Club1 from './MyPage/Club1';
import Manage1 from './Component/Manage1';
import Manage2 from './Component/Manage2';
import ManagePage1 from './ManagePage/ManagePage1';
import ManagePage2 from './ManagePage/ManagePage2';
import PresidentPage1 from './President/PresidentPage1';
import President from './Component/President';

function App() {
  return (
    <BrowserRouter>
            <AnimatePresence>
                <Routes>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/LoginPage' element={<LoginPage/>}/>
                  <Route path='/KakaoLogin' element={<KakaoLogin/>}/>
                  <Route path="/" element={<Layout1/>}>
                    <Route index element={<MainPage1/>}/>
                    <Route path='/MainPage1' element={<MainPage1/>}/>
                  </Route>
                  <Route path="/" element={<Layout2/>}>
                    <Route path='/MainPage2' element={<MainPage2/>}/>
                  </Route>
                  <Route path="/" element={<Layout3/>}>
                    <Route path='/BeforeEmail' element={<BeforeEmail/>}/>
                    <Route path='/MyPage' element={<MyPage/>}/>
                    <Route path='/School' element={<School/>}/>
                    <Route path='/Manage1' element={<Manage1/>}/>
                    <Route path='/Manage2' element={<Manage2/>}/>
                    <Route path='/Email1' element={<Email1/>}/>
                    <Route path='/Email2' element={<Email2/>}/>
                    <Route path='/Email3' element={<Email3/>}/>
                    <Route path='/Club1' element={<Club1/>}/>
                    <Route path='/ManagePage1' element={<ManagePage1/>}/>
                    <Route path='/ManagePage2' element={<ManagePage2/>}/>
                    <Route path='/PresidentPage1' element={<PresidentPage1/>}/>
                    <Route path='/President' element={<President/>}/>
                  </Route>
                  <Route path="/GameStart" element={<GameStart/>} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
  );
}

export default App;