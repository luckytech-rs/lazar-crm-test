import React from 'react';
import { Layout, Typography } from 'antd';
import UserList from '../components/UserList';

const { Content } = Layout;
const { Title } = Typography;

const UserListPage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Title level={2}>Users</Title>
                    <UserList />
                </div>
            </Content>
        </Layout>
    );
};

export default UserListPage;
