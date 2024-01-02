import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "./order.type";


export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async(userId: string, thunkAPI) => {
        try {
            const response = await axios.get<IOrder[]>(`https://654ded9bcbc3253557421138.mockapi.io/orders?search=${userId}`)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error receving order")
        }
    }
)

type OrderType = {
    order: IOrder[],
    isLoading: boolean;
    error: string;
}

const initialState:OrderType = {
    order: [],
    isLoading: false,
    error: ""
}

export const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchOrder.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        })
        .addCase(fetchOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})

export default orderSlice.reducer;