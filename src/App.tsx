import React from 'react';
import './styles.scss';
import {Routes, Route, Navigate} from 'react-router-dom';
import {PageFinal, PageHome} from './pages';
import {Header, Layout1} from '@components/layouts';

const App: React.FC = () => (
    <>
        <Header />
        <Layout1>
            <Routes>
                <Route path="/distance-calculator/" element={<PageHome />} />
                <Route
                    path="/distance-calculator/final"
                    element={<PageFinal />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/distance-calculator/" replace />}
                />
            </Routes>
        </Layout1>
    </>
);

export default App;
