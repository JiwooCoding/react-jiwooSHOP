import { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';
import {setUserId} from '../../../store/cart/cart.slice';

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth(app);
  
  const handleSignUpAndLogin = (email: string,password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //리덕스 스토어에 담는 로직
        dispatch(setUser({
          email: userCredential.user.email,
          token: userCredential.user.refreshToken,
          id: userCredential.user.uid,
        }))
      //다 담아준 뒤, navigate함수 이용해서 메인페이지로 이동
      dispatch(setUserId(userCredential.user.uid))
      navigate("/");
    })
    .catch((error) => {
      return error && setFirebaseError("이메일 혹은 비밀번호가 올바르지 않습니다.")
    })
  }

  return (
    <Form
        title={"가입하기"}
        getDataForm={handleSignUpAndLogin}
        firebaseError={firebaseError}
    />
  )
}

export default SignUp