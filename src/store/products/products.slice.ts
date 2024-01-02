import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";


//createAsyncThunk: 비동기 작업을 처리하고 성공 또는 실패 시 액션을 디스패치할 수 있도록 도와줍니다.
//createAsyncThunk(actiontype, callbackfunction)
export const fetchProducts = createAsyncThunk(
    //typePrefix (액션 타입 생성)
    "products/fetchProducts",
    //payload를 create해주는 payloadCreator
    async (category: string, thunkAPI) => {
        try {
            let response;
            if(category){
                response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`)
            }else{
                response = await axios.get<IProduct[]>("https://fakestoreapi.com/products")
            }
            return response.data; //payload
        } catch (error) {
                //오류메세지는 나중에 리듀서에서 처리된다
                return thunkAPI.rejectWithValue("Error Loading Products")
            }
        }
);

type ProductType = {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState:ProductType = {
    products: [],
    isLoading: false,
    error: ""
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{

    },
    //reducer를 추가하면 프로미스의 진행상태에 따라서 리듀서를 실행할 수 있다.
    //Redux에서는 자체적으로 비동기 처리를 지원하지 않아서, extraReducers라는 것을 사용해 createAsyncThunk로 생성한 Thunk를 등록시켜주어야합니다.
    extraReducers:(builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            //thunkAPI.rejectWithValue("Error Loading Products")
            state.error = action.payload as string;
        })
    }
})

export default productsSlice.reducer;