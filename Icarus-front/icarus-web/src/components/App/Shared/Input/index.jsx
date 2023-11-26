import { useState } from 'react';
import editIcon from '../../../../assets/images/icaro-edit-button.png'
import styles from './input.module.css';

const Input = ({ labelText, type, name, typeName, error, placeholder, register, readOnly, onClick, control, isChecked }) => {
  const [toggleRead, setToggleRead] = useState(readOnly);
  const [toggleChecked, setToggleChecked] = useState(isChecked);

  const inputStyle = () => {
    switch (typeName) {
      case 'statusPanel':
        return styles.mainStatusContainer;
      case 'loadWagon':
        return styles.loadWagonInputContainer;
      case 'loadSeal':
        return styles.loadSealContainer;
      case 'radio':
        return styles.radioBtn;
      case 'form':
        return styles.formInputContainer;
      default:
        return styles.mainStatusContainer;
    }
  }

  const changeControl = (control) => {
    if (sessionStorage.getItem('role') === 'MUS') {
      return true
    }
    return control
  }

  return (
    <div>
      {typeName === 'statusPanel' &&
        <fieldset className={`${inputStyle()}`}>
          <label>{labelText}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name)}
            readOnly={toggleRead}
          ></input>
        </fieldset>
      }
      {typeName === 'loadWagon' &&
        <fieldset className={`${inputStyle()}`}>
          <label>{labelText}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name)}
            readOnly={toggleRead}
            onClick={() => {
              if (toggleRead) {
                onClick();
              }
            }}
          ></input>
          {(name === 'tareValue' && changeControl(control)) &&
            <img src={editIcon} alt='edit-icon' className={styles.editIcon} onClick={() => setToggleRead(!toggleRead)} ></img>
          }
          {(name === 'rawValue' && changeControl(control)) &&
            <img src={editIcon} alt='edit-icon' className={styles.editIcon} onClick={() => setToggleRead(!toggleRead)} ></img>
          }
        </fieldset>
      }
      {typeName === 'loadSeal' &&
        <fieldset className={`${inputStyle()}`}>
          <label>{labelText}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name)}
            readOnly={toggleRead}
          ></input>
        </fieldset>
      }
      {typeName === 'radio' &&
        <fieldset className={`${inputStyle()}`}>
          <label>{labelText}</label>
          <input
            type={type}
            name={name}
            onClick={onClick}
            onChange={() => setToggleChecked(!toggleChecked)}
            checked={toggleChecked}
          ></input>
        </fieldset>
      }
      {typeName === 'form' &&
        <fieldset className={`${inputStyle()}`}>
          <label>{labelText}</label>
          {type === 'select' && (
            <select name={name} {...register(name)}>
              <option value='USR'>USR</option>
              <option value='ADM'>ADM</option>
            </select>
          )}
          {type !== 'select' && (
          <input
            type={type}
            name={name}
            {...register(name)}
          ></input>
          )}
        </fieldset>
      }
      {error && <p className={styles.errorMessage}> {error} </p>}
    </div>
    
  );
};

export default Input;
