import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addUser, deleteUser, downUser, getUsers, putUser, upUser } from '../../../redux/user/thunks';
import { settingsVars } from '../../../language/langVars'

import Button from '../Shared/Button';
import Input from '../Shared/Input';
import settingIcon from '../../../assets/images/icaro-config-button.png';
import keyIcon from '../../../assets/images/icaro-password-restablish-button.png';
import penIcon from '../../../assets/images/icaro-edit-button.png';
import lockIcon from '../../../assets/images/icaro-block-button.png';
import unlockIcon from '../../../assets/images/icaro-unblock-button.png'
import trashIcon from '../../../assets/images/icaro-delete-button.png';
import styles from './settings.module.css';
import Img from '../Shared/Img';
import Modal from '../Shared/Modal';

const Settings = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [modalChange, setModalChange] = useState('');
  const [usersList, setUsersList] = useState(true);
  const [portList, setPortList] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formType, setFormType] = useState('');

  useEffect(()=> {
    if (userData.list.length <= 0) {
      dispatch(getUsers(sessionStorage.getItem('uid')));
    }
  }, [modalChange]);

  const changeIcon = (user) => {
    if (user?.isActive) {
      return (
        <img
          src={lockIcon}
          alt='lock-icon'
          onClick={async () => {
            await dispatch(downUser(user?.id, sessionStorage.getItem('uid')));
            await dispatch(getUsers(sessionStorage.getItem('uid')));
          }}
        ></img>
      );
    } else {
      return (
        <img
          src={unlockIcon}
          alt='unlock-icon'
          onClick={async () => {
            await dispatch(upUser(user?.id, sessionStorage.getItem('uid')));
            await dispatch(getUsers(sessionStorage.getItem('uid')));
          }}
        ></img>
      );
    }
  }

  const changeMethod = (method) => {
    switch (method) {
      case 'add':
        return addUser;
      case 'put':
        return putUser;
      default:
        return () => {};
    }
  }

  const switchList = () => {
    setPortList(!portList);
    setUsersList(!usersList);
  }

  return (
    <>
      {modalChange === 'form' &&
        <Modal
          formType={formType}
          method={changeMethod(selectedMethod)}
          user={selectedUser}
          setModalChange={setModalChange}
          modalChange={modalChange}
          toggle={() => setModalChange('settings')}
        />
      }
      <div className={ styles.settingsContainer }>
        <div className={ styles.settingsImgContainer }>
          <Img src={ settingIcon } alt={ 'settings-icon' } />
          <p className={ styles.settingsText }>{ settingsVars().config }</p>
        </div>
        <div className={ styles.settingsUserContainer }>
          <div className={ styles.settingsUserTitleContainer }>
            <p onClick={() => switchList()} className={ styles.settingsUserText }>{ settingsVars().users }</p>
            <Button
              type={'new'}
              onClick={() => {
                setSelectedUser({});
                setSelectedMethod('add');
                setFormType('normal');
                setModalChange('form');
              }}
            />
          </div>
          {usersList &&
            <ul className={ styles.settingsUsersList }>
              {userData?.list?.map((user) => {

                  if (sessionStorage.getItem('role') === 'ADM' && user.accountType === 'ADM') {
                    return ''
                  }

                  return (
                    <li key={user?.id}>
                      <p>{`${user?.fName} ${user?.lName}`}</p>
                      <img
                        src={keyIcon}
                        alt='key-icon'
                        onClick={() => {
                          setSelectedUser(user);
                          setSelectedMethod('put');
                          setFormType('pass');
                          setModalChange('form');
                        }}
                      ></img>
                      <img
                        src={penIcon}
                        alt='pen-icon'
                        onClick={() => {
                          setSelectedUser(user);
                          setSelectedMethod('put');
                          setFormType('normal');
                          setModalChange('form');
                        }}
                      ></img>
                      { changeIcon(user) }
                      <img
                        src={trashIcon}
                        alt='trash-icon'
                        onClick={async () => {
                          await dispatch(deleteUser(user.id, sessionStorage.getItem('uid')));
                          await dispatch(getUsers(sessionStorage.getItem('uid')));
                        }}
                      >
                      </img>
                      <p>{ user?.accountType }</p>
                      <Input
                        labelText={settingsVars().valManual}
                        type='checkbox'
                        typeName='radio'
                        isChecked={ user?.controlAccess }
                        onClick={() => dispatch(putUser(user?.id, sessionStorage.getItem('uid'), {...user, controlAccess: !user?.controlAccess}))}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          }
        </div>
        <div className={ styles.settingsPortContainer }>
          <p onClick={() => switchList()}>{ settingsVars().ports }</p>
          {portList &&
            <div>
              <Input labelText={'Nombre de la bascula'} typeName={'form'} register={()=> {}} />
              <Input labelText={'Indicador'} typeName={'form'} register={()=> {}} />
            </div>
          }
        </div>
      </div>
    </>
    
  );
}

export default Settings;