import axiosInstance from '../axiosInstance';
import { User } from '../../types';

export const fetchUsersAPI = async () => {
    return await axiosInstance.get<User[]>('/users')
};
