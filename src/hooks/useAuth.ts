import { useAppSelector } from "./redux";

export function useAuth() {
    const {id, email, token} = useAppSelector((state) => state.userSlice);

    return {
        isAuth: !!email, //이메일이 있으면 isAuth는 true
        email,
        id,
        token
    }
}