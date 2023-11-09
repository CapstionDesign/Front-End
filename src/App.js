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
                  </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
  );
}

export default App;