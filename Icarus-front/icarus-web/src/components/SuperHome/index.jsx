/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMegaUser, deleteMegaUser, getMegaUsers, putMegaUser } from '../../redux/megaUser/thunks';

import Button from '../App/Shared/Button';
import Modal from '../App/Shared/Modal';

import keyIcon from '../../assets/images/icaro-password-restablish-button.png';
import penIcon from '../../assets/images/icaro-edit-button.png';
import lockIcon from '../../assets/images/icaro-block-button.png';
import unlockIcon from '../../assets/images/icaro-unblock-button.png'
import trashIcon from '../../assets/images/icaro-delete-button.png';
import styles from './superHome.module.css';

const SuperHome = (props) => {
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formType, setFormType] = useState('');
  const [modalChange, setModalChange] = useState('');
  const data = useSelector((state) => state.megaUsers);
  const dispatch = useDispatch();
  const [userList, setUserList] = useState(data?.list);

  useEffect(() => {
    dispatch(getMegaUsers());
  }, [userList]);
  
  
  const langVars = () => {
    switch (props.language) {
      default:
        return ({ users: 'Mega usuarios' });
    }
  }

  const changeMethod = (method) => {
    switch (method) {
      case 'add':
        return addMegaUser;
      case 'put':
        return putMegaUser;
      default:
        return () => {};
    }
  }

  const changeIcon = (lock, user) => {
    if (lock) {
      return (
        <img src={lockIcon} alt='lock-icon' onClick={() => {
          dispatch(putMegaUser(user.id, {...user, isActive: !lock}));
          dispatch(getMegaUsers());
          setUserList(data?.list);
        }}></img>
      );
    } else {
      return (
        <img src={unlockIcon} alt='unlock-icon' onClick={() => {
          dispatch(putMegaUser(user.id, {...user, isActive: !lock}));
          dispatch(getMegaUsers());
          setUserList(data?.list);
        }}></img>
      );
    }
  }

  return (
    <div className={ styles.usersListContainer }>
      {modalChange === 'form' &&
        <Modal
          type={'superadmin'}
          formType={formType}
          modalChange={modalChange}
          setModalChange={setModalChange}
          method={changeMethod(selectedMethod)}
          user={selectedUser}
        />
      }
      <div className={ styles.usersListTitleContainer }>
        <p className={ styles.usersListText }>{ langVars().users }</p>
        <Button
          type={'new'}
          onClick={() => {
            setSelectedUser({});
            setSelectedMethod('add');
            setFormType('normal');
            setModalChange('form')
          }}
        />
      </div>
        <ul className={ styles.usersList }>
          {data?.list?.map((megaUser) => {return (
            <li key={megaUser.id}>
              <p>{`${megaUser.fName} ${megaUser.lName}`}</p>
              <img
                src={keyIcon}
                alt='key-icon'
                onClick={() => {
                  setSelectedUser(megaUser);
                  setSelectedMethod('put');
                  setFormType('pass');
                  setModalChange('form');
                }}
              ></img>
              <img
                src={penIcon}
                alt='pen-icon'
                onClick={() => {
                  setSelectedUser(megaUser);
                  setSelectedMethod('put');
                  setFormType('normal');
                  setModalChange('form');
                }}
              ></img>
              { changeIcon(megaUser.isActive, megaUser) }
              <img
                src={trashIcon}
                alt='trash-icon'
                onClick={() => dispatch(deleteMegaUser(megaUser.id))}
              ></img>
              <p>{ megaUser.accountType }</p>
            </li>
          )})}
        </ul>
    </div>
  );
}

export default SuperHome;
