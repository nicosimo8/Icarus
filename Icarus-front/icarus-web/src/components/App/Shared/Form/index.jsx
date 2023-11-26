import { useEffect, useState } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { schema } from './signupValidations'

import Input from '../Input';
import Button from '../Button';
import styles from './form.module.css';

const Form = ({ formType, method, user, setModalChange, modalChange }) => {
  const userCheck = (user) => {
    if (!user) {
      if (sessionStorage.getItem('role') === 'SAD') {
        return {
          serialKey: '',
          userName: '',
          pass: '',
          fName: '',
          lName: '',
          accountType: 'MUS'
        }
      }
      return {
        userName: '',
        pass: '',
        fName: '',
        lName: '',
        accountType: 'USR'
      }
    }
    return user;
  }
  const [userChecked, setUserChecked] = useState(userCheck(user));
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema),
    mode: 'onChange',
    defaultValues: {
      serialKey: userChecked?.serialKey ?? '',
      userName: userChecked?.userName ?? '',
      pass: userChecked?.pass ?? '',
      fName: userChecked?.fName ?? '',
      lName: userChecked?.lName ?? '',
      accountType: userChecked?.accountType ?? 'USR'
    }
  });

  useEffect(() => {
  }, [modalChange]);

  const resetForm = () => {
    reset({
      userName: '',
      pass: '',
      fName: '',
      lName: '',
      accountType: 'USR',
      megaUser_id: sessionStorage.getItem('role')
    });
    setUserChecked({
      userName: '',
      pass: '',
      fName: '',
      lName: '',
      accountType: 'USR',
      megaUser_id: sessionStorage.getItem('role')
    });
  }

  const onSubmit = (data) => {
    data = {...data, megaUser_id: sessionStorage.getItem('uid')}
    try {
      if (user?.id) {
        dispatch(method(user.id, sessionStorage.getItem('uid'), data));
      }
      dispatch(method(data));
      setModalChange('settings');
      resetForm();
    } catch (error) {
      console.log(error)
      //Modal de msj
    }
  }

  const onInvalid = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className={styles.form}>
      {sessionStorage.getItem('role') === 'SAD' && formType === 'normal' &&
        <Input 
          labelText={'Serial Key'}
          type='text'
          name={'serialKey'}
          typeName={'form'}
          readOnly={false}
          error={errors.serialKey?.message}
          register={register}
        />
      }
      {formType === 'normal' &&
        <Input
          labelText={'Username'}
          type='text'
          name={'userName'}
          typeName={'form'}
          readOnly={false}
          error={errors.userName?.message}
          register={register}
        />
      }
      {(!user?.pass || formType === 'pass') &&
        <Input
          labelText={'Password'}
          type='password'
          name={'pass'}
          typeName={'form'}
          readOnly={false}
          error={errors.pass?.message}
          register={register}
        />
      }
      {formType === 'pass' &&
        <Input
          labelText={'Confirm password'}
          type='password'
          name={'newPass'}
          typeName={'form'}
          readOnly={false}
          error={errors.newPass?.message}
          register={register}
        />
      }
      {formType === 'normal' &&
        <Input
          labelText={'First Name'}
          type='text'
          name={'fName'}
          typeName={'form'}
          readOnly={false}
          error={errors.fName?.message}
          register={register}
        />
      }
      {formType === 'normal' &&
        <Input
          labelText={'Last Name'}
          type='text'
          name={'lName'}
          typeName={'form'}
          readOnly={false}
          error={errors.lName?.message}
          register={register}
        />
      }
      {sessionStorage.getItem('role') === 'MUS' && formType === 'normal' &&
        <Input
          labelText={'Account Type'}
          type='select'
          name={'accountType'}
          typeName={'form'}
          readOnly={false}
          error={errors.accountType?.message}
          register={register}
        />
      }
      <Button type={'submit'} />
      <Button type={'back'} onClick={(e) => {
        e.preventDefault();
        setModalChange('settings');
      }} />
    </form>
  );
};

export default Form;
