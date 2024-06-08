import { getAllProperties, getPropertyDetails } from "@/api-service/apiCall";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPropertyDataFunction = createAsyncThunk('getProperties', async (page, propertyType, city, bhk, priceRange) => {
    const response = await getAllProperties(page, propertyType, city, bhk, priceRange);
    return response.data; 
});

export const getPropertyDetailFunction = createAsyncThunk('getPropertyDetails', async (id) => {
    const response = await getPropertyDetails(id);
    return response.data;
});

const propertySlice = createSlice({
    name: "allProperties",
    initialState: {
        isLoading: true,
        isError: false,
        data: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPropertyDataFunction.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllPropertyDataFunction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllPropertyDataFunction.rejected, (state) => {
            state.isError = true
        })
    }
});

const propertyDetailSlice = createSlice({
    name: "propertyDetails",
    initialState: {
        isLoading: true,
        isError: false,
        data: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getPropertyDetailFunction.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getPropertyDetailFunction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getPropertyDetailFunction.rejected, (state) => {
            state.isError = true
        })
    }
});

export const propertyReducer = propertySlice.reducer;
export const propertyDetailReducer = propertyDetailSlice.reducer;
