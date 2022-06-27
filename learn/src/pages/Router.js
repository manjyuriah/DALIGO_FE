import { Route, Routes } from 'react-router-dom';
import { default as Login } from './Login';
import { default as Main } from './Main';

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default Router;