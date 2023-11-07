import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Layout from './Layout/Layout';
import LoginPage from './LoginPage/LoginPage';
import KakaoLogin from './LoginPage/KakaoLogin';
import MainPage from './MainPage/MainPage';
import MainPage2 from './MainPage/MainPage2';

function App() {
  return (
    <BrowserRouter>
            <AnimatePresence>
                <Routes>
                  <Route path='/LoginPage' element={<LoginPage/>}/>
                  <Route path='/KakaoLogin' element={<KakaoLogin/>}/>
                  <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='/MainPage2' element={<MainPage2/>}/>
                  </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
  );
}

export default App;