import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user') || "") : {email: "", token: "", id: ""}

export const userSlice = createSlice({
    name:'user',
    initialState: initialState,
    reducers:{
        setUser: (state, action) => {
            //dispatch(setUser)에서 받은 email의 값을 state.email에 저장한다.
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            localStorage.setItem('user', JSON.stringify(state))
        },
        //보안 상의 이유로 비밀번호는 넣지 않는 것이 좋음
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";

            localStorage.setItem('user', JSON.stringify(state))
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
