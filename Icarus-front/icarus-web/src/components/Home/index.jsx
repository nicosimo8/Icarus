/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../redux/auth/thunks';
import { addTicket, getTicketById, getTickets, putTicket } from '../../redux/ticket/thunks';

import { theTime } from './home.helper';
import { homeVars } from '../../language/langVars';

import Input from '../App/Shared/Input'
import Button from '../App/Shared/Button'
import Img from '../App/Shared/Img';
import Modal from '../App/Shared/Modal';

import icaroLogo from '../../assets/images/icaro-logo.png';
import icaroUserdefault from '../../assets/images/icaro-user-default-logo.png';
import icaroSettingsIcon from '../../assets/images/icaro-config-button.png'
import styles from './home.module.css';

export default function Home({ language }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ticketData = useSelector((state => state.tickets));

  const [operatorTicket, setOperatorTicket] = useState({
    operation: 0,
    listOfWagons: []
  });
  const [seals, setSeals] = useState({
    seal1: '', seal2: '', seal3: '', seal4: '', seal5: '', seal6: '', seal7: '', seal8: '', seal9: '', seal10: '', seal11: '', seal12: ''
  });
  const [wagon, setWagon] = useState({
    wagonNumbValue: '',
    wagonWeight: 0.0,
    tareValue: 0.0,
    rawValue: 0.0,
    seals: {}
  });
  const [sessionVar, setSessionVar] = useState(sessionStorage.getItem('user'));
  const [weightPort, setWeightPort] = useState('FETCH');
  const [readOnly, setReadOnly] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalChange, setModalChange] = useState('wagon');
  const [weight, setWeight] = useState(10.0);
  const [weightText, setWeightText] = useState('');

  useEffect(() => {
    try {
      if (!sessionStorage.getItem('role') || !sessionStorage.getItem('user')) {
        navigate('/login');
      }

      dispatch(getTickets(sessionStorage.getItem('uid')));

      setWeightText(weight + ' kg');
      theTime();
    } catch (error) {
      console.log('An error was occured useEffect / home: ');
      console.log(error);
    }
  }, [sessionVar, navigate, weight, modal]);

  const register = () => {
      return '';
  }

  const toggleModal = (modalType) => {
    try {
      setModal(!modal);
      setModalChange(modalType);
    } catch (error) {
      console.log('An error was occured toggling modals / Home: ');
      console.log(error);
    }
    
  }

  const loadTicket = (data) => {
    try {
      dispatch(addTicket({megaUser_id: sessionStorage.getItem('uid')}));
      setOperatorTicket({...operatorTicket, operation: data.length});
    } catch (error) {
      console.log('An error was occured loading ticket / Home: ');
      console.log(error);
    }
    
  };

  const resetStateValues = () => {
    try {
      setReadOnly(true);
      setSeals({
        seal1: '', seal2: '', seal3: '', seal4: '', seal5: '', seal6: '', seal7: '', seal8: '', seal9: '', seal10: '', seal11: '', seal12: ''
      });
      setWagon({
        wagonNumbValue: '',
        wagonWeight: 0.0,
        tareValue: 0.0,
        rawValue: 0.0,
        seals: {}
      });
    } catch (error) {
      console.log('An error was occured reseting the form / Home: ');
      console.log(error);
    }
    
  }

  return (
    <>
      {modal && (
        <Modal
          modalChange={modalChange}
          setModalChange={setModalChange}
          toggle={toggleModal}
          wagon={wagon}
          setWagon={setWagon}
          seals={seals}
          setSeals={setSeals}
          operatorTicket={operatorTicket}
          setOperatorTicket={setOperatorTicket}
          weight={weight}
        />
      )}
      <header>
        <img src={icaroLogo} className={styles.headerImageLogo} alt="icaro-logo"></img>
        <div className={styles.headerDivContainer}>
          <p className={styles.headerDivDate}>{theTime(language)}</p>
          <div className={styles.headerDivUserContainer}>
            <p>{ sessionStorage.getItem('user') }</p>
            <img
              src={icaroUserdefault}
              alt="icaro-user-default-logo"
              onClick={() => {
                dispatch(logout());
                setSessionVar('');
              }}
            ></img>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.mainDivMessageContainer}>
          <p className={styles.mainDivWelcomeMessage}>{homeVars().welcomeMessage}</p>
          <p className={styles.mainDivWarningMessage}>{homeVars().warningMessage}</p>
        </div>
        <div className={styles.mainDivButtonsContainer}>
          <Button
          language={language}
          type={'loadNewWagon'}
          onClick={() => {
            loadTicket(ticketData?.list);
            resetStateValues();
            toggleModal('wagon');
          }}
          />
          <Button
            language={language}
            type={'continue'}
            onClick={() => {
              toggleModal('wagon');
            }}
          />
        </div>
        
        <div className={styles.mainBottomContainer}>
          {sessionStorage.getItem('role') !== 'USR' &&
            <Img
              typeOf={'main'}
              text={homeVars().settingsBtnText}
              src={icaroSettingsIcon}
              alt={'icaro-config-button'}
              onClick={() => toggleModal('settings')}
            />
          }
          <Input weight={weightText} labelText={homeVars().statusPanelText} type='text' typeName='statusPanel' placeholder='0.0 kg' register={register} readOnly={readOnly}/>
        </div>
      </main>
    </>
  );
};
