import { useEffect } from 'react';

import Button from '../Button';
import styles from './modalAlert.module.css';

const ModalAlert = ({ modalChange, setModalChange, method, toggle, wagon, textMsg }) => {

  useEffect(() => {
  }, [modalChange, wagon]);

  return(
    <div className={styles.modalContainer}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.modalButtonContainer}>
            <Button type={'close'} onClick={() => toggle('confirm')} />
          </div>
          {modalChange === 'confirm' &&
            <div>
              <p>{`${textMsg?.text}`}</p>
              <div>
                <Button type={'submit'} onClick={() => {
                  method();
                  setModalChange(textMsg?.type);
                  toggle('confirm')
                }} />
                <Button type={'back'} onClick={() => toggle('confirm')} />
              </div>
            </div>
          }
          {modalChange === 'error' &&
            <div>
              <p>{'Error!'}</p>
              <p>{`${textMsg?.text}`}</p>
              <Button type={'submit'} onClick={method} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;