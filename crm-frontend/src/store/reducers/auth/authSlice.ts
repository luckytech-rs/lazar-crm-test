import {createSlice, PayloadAction, createAsyncThunk, Draft} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { loginAPI, registerAPI } from '../../../api/auth/authAPI';
import { AuthState, LoginResponse, LoginCredentials, RegisterResponse, RegisterCredentials } from '../../../types';

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

export const login = createAsyncThunk(
    '/login',
    async (credentials: LoginCredentials) => {
        const response = await loginAPI(credentials);
        return response.data;
    }
);

export const register = createAsyncThunk(
    '/register',
    async (credentials: RegisterCredentials) => {
        const response = await registerAPI(credentials);
        return response.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state:Draft<AuthState>) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state:Draft<AuthState>, action: PayloadAction<LoginResponse>) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        });
        builder.addCase(login.rejected, (state:Draft<AuthState>, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to login';
        });
        builder.addCase(register.pending, (state:Draft<AuthState>) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(register.fulfilled, (state:Draft<AuthState>, action: PayloadAction<RegisterResponse>) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        });
        builder.addCase(register.rejected, (state:Draft<AuthState>, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to register';
        });
    },
});

export const { logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) => state.auth.token !== null || localStorage.getItem('token');
export default authSlice.reducer;
