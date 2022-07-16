

import { Route, Routes } from 'react-router-dom';
import { default as Login } from './Login';
import { default as Main } from './Main';

import DesignSystem from 'components/core/DesignSystem';
import ModalPage from 'components/core/ModalPage';

const Router = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Main />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/test" element={<ModalPage />}/>
                <Route path="/test2" element={<DesignSystem />}/>
            </Routes>
        </>
    )
}

export default Router;