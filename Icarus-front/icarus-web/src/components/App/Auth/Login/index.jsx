/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from '../../../../redux/auth/thunks';

import icaroLogo from '../../../../assets/images/icaro-logo.png';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import styles from './login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userName: '',
      pass: ''
    }
  });

  useEffect(() => {
    if (sessionStorage.getItem('role') && sessionStorage.getItem('role') !== 'undefined') {
      navigate('/');
    }
  }, [loginData?.isLoading]);

  const resetForm = () => {
    reset({
      userName: '',
      pass: ''
    });
  };

  const onSubmit = (data) => {
    try {
      dispatch(login(data));
      sessionStorage.getItem('role');
    } catch (error) {
      console.log(error);
    }
  };

  const onInvalid = (errors) => console.log(errors);

  return (
    <>
      <header className={styles.headerLogin}>
        <img src={icaroLogo} className={styles.headerImageLogo} alt="icaro-logo"></img>
      </header>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className={styles.form}>
        <div>
          <Input
            labelText={'Username'}
            type='text'
            name={'userName'}
            typeName={'form'}
            readOnly={false}
            error={errors.userName?.message}
            register={register}
          />
          <Input
            labelText={'Password'}
            type='password'
            name={'pass'}
            typeName={'form'}
            readOnly={false}
            error={errors.userName?.message}
            register={register}
          />
        </div>
        <div>
          <Button
            type={'clean'}
            onClick={(e) => {
              e.preventDefault();
              resetForm()
            }}
          />
          <Button type={'submit'} />
        </div>
      </form>
    </>
  );
};

export default Login;