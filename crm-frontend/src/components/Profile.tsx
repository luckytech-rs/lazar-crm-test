import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Spin, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../store/reducers/users/profileSlice';
import { logout } from '../store/reducers/auth/authSlice';

import { RootState, AppDispatch } from '../store/store';

const { Text , Link} = Typography;

const Profile: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { profile, loading, error } = useSelector((state: RootState) => state.profile);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);


    const handleLogout = () => {
        dispatch(logout());
        navigate('/users');
    };

    if (loading) return <Spin />;
    if (error) return <Alert message={error} type="error" />;

    return (
        <div>
            <Text>Welcome {profile?.fullName}! To logout click <Link onClick={handleLogout}>here</Link></Text><br />
        </div>
    );
};

export default Profile;
