import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Error, Footer } from './components';
import { HomeForm, EmployeesDataList } from './pages';
import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Router>
            <Routes>
                <Route exact path="/" element={<HomeForm />} />
                <Route path="/employees" element={<EmployeesDataList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
        <Footer />
    </React.StrictMode>
);
