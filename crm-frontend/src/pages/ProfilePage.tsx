import React from 'react';
import { Layout } from 'antd';
import Profile from '../components/Profile';

const { Content } = Layout;

const ProfilePage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Profile />
                </div>
            </Content>
        </Layout>
    );
};

export default ProfilePage;
