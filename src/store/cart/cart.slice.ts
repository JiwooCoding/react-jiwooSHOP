import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../products/products.type";

export const postOrder = createAsyncThunk(
    "cart/postOrder",
    async(order:cartState, thunkAPI) => {
        try {
            //server로 부터 응답을 받지 않기 때문에 타입 안줘도 됨
            await axios.post("https://654ded9bcbc3253557421138.mockapi.io/orders", order)
            thunkAPI.dispatch(sendOrder());
        } catch (error) {
            return thunkAPI.rejectWithValue("Error sending Order!")
        }
    }
)

type cartState = {
    products: IProduct[];
    totalPrice: number;
    userId: string;
}

const initialState:cartState = {
    products: localStorage.getItem("cartProducts") ?
        //데이터를 불러올 때는 JSON문자열을 자바스크립트 객체나 배열로 반환한다.
        JSON.parse(localStorage.getItem("cartProducts") || "") : [],
    totalPrice: 0,
    userId: localStorage.getItem("userId") ?
        JSON.parse(localStorage.getItem("userId") || "") : ""
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setUserId:(state, action: PayloadAction<string>) => {
            state.userId = action.payload;
            //localStorage는 문자열만 저장할 수 있기 때문에
            //JSON.stringify 사용해 객체를 문자열로 변화해 저장한다.
            localStorage.setItem("userId", JSON.stringify(state.userId));
        },
        removeUserId:(state) => {
            state.userId = "";
            localStorage.setItem("userId", JSON.stringify(state.userId));
        },
        //새로운 상품은 products 배열에 추가되고,
        //해당 상품의 정보는 기존 상태에서 액션으로부터 받은 정보를 그대로 사용하되,
        //수량은 1로, 총 가격은 상품의 가격으로 설정됩니다.
        addToCart:(state, action: PayloadAction<IProduct>) => {
            //현재상태에서 products의 배열에 새로운 상품 추가(push)
            state.products.push({
                ...action.payload, //action의 payload의 모든 속성을 가져온다.
                quantity:1,
                total: action.payload.price
            })

            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        deleteFromCart:(state, action: PayloadAction<number>) => {
            state.products = state.products.filter((item) => item.id !== action.payload)

            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        decrementProduct:(state, action: PayloadAction<number>) => {
            state.products = state.products.map((item) =>
                item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity -1,
                    total: item.price * (item.quantity -1)
                }
                : item
            )
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        incrementProduct:(state, action: PayloadAction<number>) => {
            state.products = state.products.map((item) =>
                item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity +1,
                    total: item.price * (item.quantity +1)
                }
                : item
            )
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        getTotalPrice:(state) => {
            state.totalPrice = state.products.reduce((acc, item) => (acc += item.total), 0)
            return state;
        },
        sendOrder:(state) => {
            //빈 객체인 이유?
            //주문하기 버튼 눌러서 주문을 보냈으면 카트에 있는 products들은 비워주어야 하기 때문이다.
            state.products = [],
            localStorage.setItem("cartProducts", JSON.stringify(state.products))
        }
    }
})

export const {
    addToCart,
    deleteFromCart,
    incrementProduct,
    decrementProduct,
    getTotalPrice,
    setUserId,
    removeUserId,
    sendOrder
} = cartSlice.actions;

export default cartSlice.reducer;