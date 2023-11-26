import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { wagonVars } from '../../../language/langVars';

import { addWagon } from '../../../redux/wagon/thunks';
import { getUserById } from '../../../redux/user/thunks';

import { schema } from './loadWagonValidations'
import Input from '../Shared/Input';
import Button from '../Shared/Button';
import styles from './newWagon.module.css';
import { useDispatch, useSelector } from 'react-redux';

const NewWagon = ({ weight, wagon, setWagon, seals, setSeals, operatorTicket, setOperatorTicket, setModalChange }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema),
    mode: 'onChange',
    defaultValues: {
      wagonNumValue: wagon?.wagonNumValue ?? '',
      tareValue: wagon?.tareValue ?? 0.0,
      rawValue: wagon?.rawValue ?? 0.0,
    }
  });

  useEffect(() => {
    if (!userData?.item?.controlAccess) {
      dispatch(getUserById(sessionStorage.getItem('id'), sessionStorage.getItem('uid')));
    }
  }, [userData?.isLoading, wagon]);

  const resetForm = () => {
    reset({
      wagonNumValue: '',
      tareValue: 0.0,
      rawValue: 0.0,
    });
    setWagon({
      wagonNumValue: '',
      wagonWeight: weight ?? 0.0,
      tareValue: 0.0,
      rawValue: 0.0,
      seals: {}
    });
    setSeals({
      seal1: '',
      seal2: '',
      seal3: '',
      seal4: '',
      seal5: '',
      seal6: '',
      seal7: '',
      seal8: '',
      seal9: '',
      seal10: '',
      seal11: '',
      seal12: '',
    });
  }

  const weightEqua = (tareValue, rawValue) => {
    return (rawValue - tareValue);
  }

  const onFinish = () => {
    try {
      dispatch(addWagon({
        wagonNumValue: getValues().wagonNumValue,
        tareValue: getValues().tareValue,
        rawValue: getValues().rawValue,
        netValue: (getValues().rawValue - getValues().tareValue),
        seal: seals,
        ticket_id: operatorTicket.operation
      }));
      setWagon({...wagon,
        wagonNumValue: getValues().wagonNumValue,
        tareValue: getValues().tareValue,
        rawValue: getValues().rawValue
      });
      setOperatorTicket({...operatorTicket,
        listOfWagons: [...operatorTicket.listOfWagons,
          {...wagon,
            wagonNumValue: getValues().wagonNumValue,
            tareValue: getValues().tareValue,
            rawValue: getValues().rawValue
          }
        ]
      });
      resetForm();
      setModalChange('ticket');
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    try {
      dispatch(addWagon({
        wagonNumValue: data.wagonNumValue,
        tareValue: data.tareValue,
        rawValue: data.rawValue,
        netValue: (data.rawValue - data.tareValue),
        seal: seals,
        ticket_id: operatorTicket.operation
      }));
      setWagon({...wagon,
        wagonNumValue: data.wagonNumValue,
        tareValue: data.tareValue,
        rawValue: data.rawValue
      });
      setOperatorTicket({...operatorTicket,
        listOfWagons: [...operatorTicket.listOfWagons,
          {...wagon,
            wagonNumValue: data.wagonNumValue,
            tareValue: data.tareValue,
            rawValue: data.rawValue
          }
        ]
      });
      resetForm();
    } catch (error) {
      console.log(error)
    }
  }

  const onInvalid = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className={styles.newWagonForm}>
      <Input
        labelText={wagonVars().wagonNum}
        type='text'
        name={'wagonNumValue'}
        typeName={'loadWagon'}
        placeholder={''}
        readOnly={false}
        error={errors.wagonNumValue?.message}
        register={register}
      />
      <Input
        labelText={wagonVars().tare}
        type='text'
        name={'tareValue'}
        typeName={'loadWagon'}
        placeholder={'0.0 kg'}
        readOnly={userData?.item?.controlAccess || true}
        control={userData?.item?.controlAccess}
        onClick={() => setValue('tareValue', weight, { shouldValidate: true })}
        error={errors.tareValue?.message}
        register={register}
      />
      <Input
        labelText={wagonVars().raw}
        type='text'
        name={'rawValue'}
        typeName={'loadWagon'}
        placeholder={'0.0 kg'}
        readOnly={userData?.item?.controlAccess || true}
        control={userData?.item?.controlAccess}
        onClick={() => setValue('rawValue', weight, { shouldValidate: true })}
        error={errors.rawValue?.message}
        register={register}
      />
      <div className={styles.netResultContainer}>
        <p className={styles.netResultText}>{wagonVars().net}</p>
        <p className={styles.netResultValue}>{weightEqua(watch(["tareValue"]), watch(["rawValue"]))}</p>
      </div>
      <Button type={'loadSeals'} onClick={(e) => {
        e.preventDefault();
        setWagon({...wagon,
          wagonNumValue: watch('wagonNumValue'),
          tareValue: watch('tareValue'),
          rawValue: watch('rawValue'),
        });
        setModalChange('seal');
      }} />
      <Button type={'done'} onClick={(e) => {
        e.preventDefault()
        onFinish();
      }} />
      <Button type={'newWagon'} />
    </form>
  );
};

export default NewWagon;