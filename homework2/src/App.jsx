import { Route, Routes } from 'react-router-dom'
import './App.css'
import SendPostPage from './pages/SendPostPage'
import Header from "./components/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/create' element={<SendPostPage/>}/>
                <Route path='*' element={<h2>404</h2>}/>
            </Routes>
        </>
    )
}

export default App
