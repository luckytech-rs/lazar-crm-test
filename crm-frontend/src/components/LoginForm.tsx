import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login, selectAuth } from '../store/reducers/auth/authSlice';
import {LoginCredentials} from "../types";

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector(selectAuth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = () => {
        dispatch(login({ email, password }));
    };

    return (
        <Form onFinish={onFinish}>
            {error && <Alert message={error} type="error" />}
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
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
