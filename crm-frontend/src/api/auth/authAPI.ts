import axiosInstance from '../axiosInstance';
import { LoginResponse, LoginCredentials, RegisterResponse, RegisterCredentials } from '../../types';

export const loginAPI = async (credentials: LoginCredentials) => {
    return await axiosInstance.post<LoginResponse>('/login', credentials);
};

export const registerAPI = async (credentials: RegisterCredentials) => {
    return await axiosInstance.post<RegisterResponse>('/register', credentials);
};


