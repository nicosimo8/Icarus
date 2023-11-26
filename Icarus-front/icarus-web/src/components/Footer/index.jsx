import icarosArgosLogo from '../../assets/images/icaro-argos-logo.png'
import styles from './footer.module.css';
import packageJson from '../../../package.json'

function Footer({ language }) {
  let versionText;
  let tradeMarkText;

  switch (language) {
    case 'ES':
      versionText = `Versión beta ${packageJson.version}`;
      tradeMarkText = ` is a register trademark of Argos Casilda S.A.S. All rights reserved.`;
      break;
    case 'EN':
      versionText = `Beta version ${packageJson.version}`;
      tradeMarkText = ` es una marca registrada de Argos Casilda S.A.S. Todos los derechos reservados.`;
      break;
    default:
      versionText = `Versión beta ${packageJson.version}`;
      tradeMarkText = ` es una marca registrada de Argos Casilda S.A.S. Todos los derechos reservados.`;
      break;
  }

  return (
    <footer className={styles.footerContainer}>
      <div>
        <img src={icarosArgosLogo} alt="argos-logo-icon"></img>
        <p><b>{versionText}</b></p>
      </div>
      <p className={styles.footerTrademark}>
        <strong>Icaro®</strong> {tradeMarkText}
      </p>
    </footer>
  );
}

export default Footer;