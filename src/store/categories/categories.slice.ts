import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesName } from "./categories.type";

const initialState = CategoriesName.All;

export const CategoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers:{
        setActiveCategory:(_, action: PayloadAction<CategoriesName>) => action.payload
    }
})

export const {setActiveCategory} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;