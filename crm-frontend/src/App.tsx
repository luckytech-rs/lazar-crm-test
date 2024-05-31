import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { selectIsAuthenticated, selectAuth } from './store/reducers/auth/authSlice';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Sidebar from './components/Sidebar';
import UserListPage from './pages/UserListPage';

const App: React.FC = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const { token } = useSelector(selectAuth);

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar isAuthenticated={!!isAuthenticated}/>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Navigate to={isAuthenticated ? "/profile" : "/login"} />} />
                        <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <LoginPage />} />
                        <Route path="/register" element={isAuthenticated ? <Navigate to="/profile" /> : <RegisterPage />} />
                        <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
                        <Route path="/users" element={ <UserListPage /> } />
                    </Routes>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
