import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../api/axiosInstance';
import { RootState } from '../../store';
import { User } from '../../../types';

interface ProfileState {
    profile: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    profile: null,
    loading: false,
    error: null,
};

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
    const response = await axiosInstance.get<User>('/profile');
    return response.data;
});

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch profile';
            });
    },
});

export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
