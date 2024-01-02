import React,{FC} from 'react'
import styles from './Form.module.scss';
import { useForm,SubmitHandler,FieldValues } from 'react-hook-form';

type FormProps = {
  title: string;
  //getDataForm이 return 하는 것이 없기 때문에 void
  getDataForm: (email: string, password: string) => void;
  firebaseError: string;
}

type input = {
  email:string;
  password:string;
}

const Form: FC<FormProps> = ({title, getDataForm, firebaseError}) => {

  const {register, handleSubmit, formState: {errors}, reset} = useForm<input>({
    mode:'onChange',
  });

  const onSubmit: SubmitHandler<FieldValues> = ({email, password}) => {
    getDataForm(email, password);
    reset();
  }

  const UserEmail = {
    required: "필수 필드입니다.",
    pattern:{
      value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      message: "입력하신 이메일 주소가 올바르지 않습니다."
    },
  }

  const UserPWD = {
    required:"필수 필드입니다.",
    minLength:{
      value:6,
      message:"최소 6자입니다."
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type='email'
          placeholder='E-mail'
          {...register("email", UserEmail)}
        />
      </div>
      {errors?.email &&
        <div>
          <span className={styles.form_error}>
            {errors.email.message}
          </span>
      </div>
      }
      <div>
        <input
          type='password'
          placeholder='PassWord'
          {...register("password", UserPWD)}
        />
      </div>
      {errors?.password &&
        <div>
          <span className={styles.form_error}>
            {errors.password.message}
          </span>
        </div>
      }
      <button type='submit'>{title}</button>
      {firebaseError && 
        <span className={styles.form_error}>{firebaseError}</span>
      }
    </form>
  )
}

export default Form