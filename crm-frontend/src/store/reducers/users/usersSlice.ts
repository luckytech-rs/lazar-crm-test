import { createSlice, createAsyncThunk, PayloadAction, Draft } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchUsersAPI } from '../../../api/users/usersAPI';
import { UsersState, User } from '../../../types';

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetchUsersAPI();
    return response.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state: Draft<UsersState>) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state: Draft<UsersState>, action: PayloadAction<User[]>) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state: Draft<UsersState>, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users';
        });
    },
});

export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
