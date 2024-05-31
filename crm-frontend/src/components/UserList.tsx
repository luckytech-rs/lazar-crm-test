import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spin, Alert } from 'antd';
import { fetchUsers, selectUsers } from '../store/reducers/users/usersSlice';
import { RootState, AppDispatch } from '../store/store';

const UserList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { users, loading, error } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    ];

    if (loading) return <Spin />;
    if (error) return <Alert message={error} type="error" />;

    return <Table columns={columns} dataSource={users} rowKey="id" />;
};

export default UserList;
