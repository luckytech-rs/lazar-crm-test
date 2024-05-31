import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/reducers/auth/authSlice';
import {selectProfile} from "../store/reducers/users/profileSlice";

const { Sider } = Layout;

interface SidebarProps {
    isAuthenticated: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isAuthenticated }) => {
    const { profile } = useSelector(selectProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/users');
    };

    const menuItems = isAuthenticated
        ? [
            { key: '1', label: <Link to="/profile">Profile</Link> },
            { key: '2', label: <Link to="/users">Users</Link> },
        ]
        : [
            { key: '1', label: <Link to="/register">Register</Link> },
            { key: '2', label: <Link to="/users">Users</Link> },
        ];

    return (
        <Sider width={200} style={{ minHeight: '100vh' }}>
            <div style={{ padding: '16px', color: '#fff', textAlign: 'center' }}>
                {isAuthenticated ? (
                    <>
                        <p>Hallo, {profile?.fullName}</p>
                        <Button type="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button type="primary" onClick={() => navigate('/login')}>
                        Login
                    </Button>
                )}
            </div>
            <Menu mode="inline" theme="dark" items={menuItems} />
        </Sider>
    );
};

export default Sidebar;
