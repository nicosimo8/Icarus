import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { schema } from './loadSealsValidations';
import { sealVars } from '../../../language/langVars';

import Input from '../Shared/Input';
import Button from '../Shared/Button';
import styles from './loadSeals.module.css';

const LoadSeals = ({ wagon, setWagon, seals, setSeals, setModalChange }) => {
  const {
    register,
    handleSubmit
  } = useForm({
    resolver: joiResolver(schema),
    mode: 'onChange',
    defaultValues: {
      seal1: seals?.seal1 ?? '',
      seal2: seals?.seal2 ?? '',
      seal3: seals?.seal3 ?? '',
      seal4: seals?.seal4 ?? '',
      seal5: seals?.seal5 ?? '',
      seal6: seals?.seal6 ?? '',
      seal7: seals?.seal7 ?? '',
      seal8: seals?.seal8 ?? '',
      seal9: seals?.seal9 ?? '',
      seal10: seals?.seal10 ?? '',
      seal11: seals?.seal11 ?? '',
      seal12: seals?.seal12 ?? '',
    }
  });

  const twelveSeals = Array.from({length: 12}, (_, index) => {
    return (
        <Input
          key={index}
          labelText={`N°${index+1}`}
          type='text'
          name={`seal${index+1}`}
          typeName='loadSeal'
          placeholder=''
          register={register}
          readOnly={false}
        />
    ); 
  });

  useEffect(() => {
  }, [seals]);

  const onSubmit = async (data) => {
    try {
      //Inserte lógica del back
      setSeals(data);
      setWagon({...wagon, seals: data});
      setModalChange('wagon');
    } catch (error) {
      //Modal de msj
    }
  }

  const onInvalid = (errors) => console.log(errors);

  return (
    <div className={styles.loadSealsContainer}>
      <div className={styles.loadSealsWagonText}>
        <p className={styles.loadSealsWagonTextTitle}>{ sealVars().wagon }</p>
        <p className={styles.loadSealsWagonTextValue}>{ wagon?.wagonNumbValue }</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <p className={styles.loadSealsLoadTitle}>{ sealVars().loadSeals }</p>
        <div className={styles.loadSealsFormDivContainer}>
          {twelveSeals}
        </div>
        <Button type={'load'} />
      </form>
    </div>
  );
};

export default LoadSeals;
