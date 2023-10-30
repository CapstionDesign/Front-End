import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import KakaoLogin from './LoginPage/KakaoLogin';

function App() {
  return (
    <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route index element={<LoginPage/>}/>
                    <Route path='/KakaoLogin' element={<KakaoLogin/>}/>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
  );
}

export default App;