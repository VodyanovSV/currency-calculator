import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Main from "./components/pages/main/Main";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path={'/'} element={<Main/>}/>
                    <Route path={'*'} element={<Navigate to={'/'}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
