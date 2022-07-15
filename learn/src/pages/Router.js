

import { Route, Routes } from 'react-router-dom';
import { default as Login } from './Login';
import { default as Main } from './Main';

import ButtonStyled from 'components/core/ButtonStyled';
import ModalPage from 'components/core/ModalPage';

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Main />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/test" element={<ModalPage />}/>
            </Routes>
        </>
    )
}

export default Router;