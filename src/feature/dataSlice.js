import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://contact.herokuapp.com/contact'; 

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addData = createAsyncThunk('data/addData', async (newData) => {
    const response = await axios.post(API_URL, newData);
    return response.data;
});

export const updateData = createAsyncThunk('data/updateData', async ({
    id,
    updatedData
}) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
});

export const searchContact = createAsyncThunk('data/searchContact', async (searchTerm) => {
    const response = await axios.get(`${API_URL}/${searchTerm}`);
    return response.data;
});

export const deleteData = createAsyncThunk('data/deleteData', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateData.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(searchContact.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchContact.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload; 
            })
            .addCase(searchContact.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    },
});

export default dataSlice.reducer;