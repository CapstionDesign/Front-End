import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route index element={<LoginPage/>}/>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
  );
}

export default App;