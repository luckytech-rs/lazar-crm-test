import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { register, selectAuth } from '../store/reducers/auth/authSlice';

const RegisterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector(selectAuth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const onFinish = () => {
        dispatch(register({ email, password, fullName }));
    };

    return (
        <Form onFinish={onFinish}>
            {error && <Alert message={error} type="error" />}
            <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!', min: 5 }]}
            >
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
            >
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!', min: 8 }]}
            >
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
