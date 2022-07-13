

import { Route, Routes } from 'react-router-dom';
import { default as Login } from './Login';
import { default as Main } from './Main';

import ButtonStyled from 'components/core/ButtonStyled';

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Main />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/test" element={<ButtonStyled />}/>
            </Routes>
        </>
    )
}

export default Router;