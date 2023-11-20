import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout1 from './Layout/Layout1';
import Layout2 from './Layout/Layout2';
import Layout3 from './Layout/Layout3';
import LoginPage from './LoginPage/LoginPage';
import KakaoLogin from './LoginPage/KakaoLogin';
import MainPage1 from './MainPage/MainPage1';
import MainPage2 from './MainPage/MainPage2';
import BeforeEmail from './MyPage/BeforeEmail';
import MyPage from './Component/MyPage';
import School from './Component/School';
import Email1 from './MyPage/Email1';
import Email2 from './MyPage/Email2';
import Email3 from './MyPage/Email3';
import Club1 from './MyPage/Club1';

function App() {
  return (
    <BrowserRouter>
            <AnimatePresence>
                <Routes>
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
                    <Route path='/Email1' element={<Email1/>}/>
                    <Route path='/Email2' element={<Email2/>}/>
                    <Route path='/Email3' element={<Email3/>}/>
                    <Route path='/Email3' element={<Club1/>}/>
                  </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
  );
}

export default App;