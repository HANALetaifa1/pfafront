import React from 'react';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup, signin } from "../Services/Authservice";
import Swal from 'sweetalert2';
import WithReactContent from "sweetalert2-react-content";

const MySwal = WithReactContent(Swal);

export const register = createAsyncThunk(
    "register",
    async (user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await signup(user);
            if (!res.data.success) throw res.data.message;
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "login",
    async (user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await signin(user);
            if (!res.data.success) throw res.data.message;
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("/logout", () => {
    localStorage.removeItem("CC_Token");
    localStorage.removeItem("refresh_token");
});

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        isLoggedIn: false,
    },
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = '';
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = new String();
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.isSuccess = false;
                state.isError = false;
                state.errorMessage = '';
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                localStorage.setItem("CC_Token", action.payload.token)
                localStorage.setItem('refresh_token', action.payload.refreshToken);
                MySwal.fire({
                    title: 'Connection was successful',
                })
                state.isSuccess = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.user = null;
                state.isError = true;
                state.errorMessage = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.user = null;
            })
    }
});


export const { reset } = authSlice.actions;
export default authSlice.reducer;

