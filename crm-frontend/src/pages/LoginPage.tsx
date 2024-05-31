import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import LoginForm from '../components/LoginForm';
import NoteLink from '../components/NoteLink';

const { Content } = Layout;
const { Title } = Typography;

const LoginPage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} sm={18} md={12} lg={8} xl={6}>
                        <div style={{ padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                            <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
                            <LoginForm />
                            <NoteLink text="Don't have an account yet?" actionText="Register" actionLink="/register" />
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default LoginPage;
