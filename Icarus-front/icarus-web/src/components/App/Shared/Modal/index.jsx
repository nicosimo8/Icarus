import { useEffect } from 'react';

import Button from '../Button';
import Settings from '../../Settings';
import NewWagon from '../../NewWagon';
import LoadSeals from '../../LoadSeals';
import TicketResume from '../../TicketResume';
import Form from '../Form';
import styles from './modal.module.css';

const Modal = ({ modalChange, setModalChange, user, method, type, formType, toggle, wagon, setWagon, operatorTicket, setOperatorTicket, seals, setSeals, textMsg, weight }) => {

  useEffect(() => {
  }, [modalChange, wagon]);

  return(
    <div className={styles.modalContainer}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.modalButtonContainer}>
            <Button type={'close'} onClick={toggle} />
          </div>
          {modalChange === 'confirm' &&
            <div>
              <p>{`${textMsg?.text}`}</p>
              <div>
                <Button type={'submit'} onClick={() => {
                  method();
                  setModalChange(textMsg?.type);
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
          {modalChange === 'settings' &&
            <Settings />
          }
          {modalChange === 'wagon' &&
            <NewWagon
              wagon={wagon}
              setWagon={setWagon}
              seals={seals}
              setSeals={setSeals}
              operatorTicket={operatorTicket}
              setOperatorTicket={setOperatorTicket}
              setModalChange={setModalChange}
              weight={weight}
            />
          }
          {modalChange === 'seal' &&
            <LoadSeals
              wagon={wagon}
              setWagon={setWagon}
              seals={seals}
              setSeals={setSeals}
              setModalChange={setModalChange}
            />
          }
          {modalChange === 'ticket' &&
            <TicketResume
              operatorTicket={operatorTicket}
              toggle={toggle}
            />
          }
          {modalChange === 'form' &&
            <Form
              type={type}
              formType={formType}
              modalChange={modalChange}
              setModalChange={setModalChange}
              user={user}
              method={method}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;