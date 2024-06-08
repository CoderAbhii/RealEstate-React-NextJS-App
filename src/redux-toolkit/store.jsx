"use client"

import { configureStore } from "@reduxjs/toolkit";
import { propertyDetailReducer, propertyReducer } from "./features/properties/propertySlice";

export const store = configureStore({
    reducer:{
        propertyData: propertyReducer,
        propertyDetailsData: propertyDetailReducer
    }
});
