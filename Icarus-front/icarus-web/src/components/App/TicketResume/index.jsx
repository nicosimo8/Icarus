/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { getWagons } from '../../../redux/wagon/thunks';
import { ticketVars } from '../../../language/langVars';

import PDFfile from '../PDFfile';
import Button from '../Shared/Button';
import styles from './ticketResume.module.css';

const TicketResume = ({ toggle, operatorTicket }) => {
  const wagonData = useSelector((state) => state.wagons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWagons(operatorTicket.operation));
  }, []);

  const onClick = () => {
    console.log(JSON.stringify(operatorTicket));
  }

  return (
    <div className={styles.ticketContainer}>
      <p className={styles.containerTitle}>{ ticketVars().titleText }</p>
      <div className={styles.ticketOperationTextContainer}>
        <p>{ ticketVars().operation }</p>
        <p>{ operatorTicket.operation }</p>
      </div>
      <p className={styles.ticketListWagonText}>{ `${ticketVars().wagonsQuantity} ${wagonData?.list?.length}` }</p>
      <div className={styles.ticketArrayOfWagons}>
        {wagonData?.list.map((wagon) => {
          return (
            <ul key={ wagon.id }>
              <li>
                <p>{ ticketVars().wagonNum }</p>
                <p>{ wagon.wagonNumValue }</p>
              </li>
              <li>
                <p>{ ticketVars().tare }</p>
                <p>{ `${wagon.tareValue} kg`}</p>
              </li>
              <li>
                <p>{ ticketVars().raw }</p>
                <p>{ `${wagon.rawValue} kg` }</p>
              </li>
              <li>
                <p>{ ticketVars().net }</p>
                <p>{ `${(wagon.netValue)} kg` }</p>
              </li>
            </ul>
          );
        })}
      </div>
      <div className={styles.ticketBottomButtons}>
        <PDFDownloadLink document={<PDFfile text={wagonData?.list} />} fileName='ticket'>
          {({ loading }) => loading ? <p>{'Cargando'}</p> : <Button type={'print'} onClick={() => onClick()} />}
        </PDFDownloadLink>
        <Button type={'exit'} onClick={toggle} />
      </div>
    </div>
  );
}

export default TicketResume;