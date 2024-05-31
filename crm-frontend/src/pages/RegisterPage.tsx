import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import RegisterForm from '../components/RegisterForm';
import NoteLink from '../components/NoteLink';

const { Content } = Layout;
const { Title } = Typography;

const RegisterPage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} sm={18} md={12} lg={8} xl={6}>
                        <div style={{ padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                            <Title level={2} style={{ textAlign: 'center' }}>Register</Title>
                            <RegisterForm />
                            <NoteLink text="Already have an account?" actionText="Login" actionLink="/login" />
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default RegisterPage;
