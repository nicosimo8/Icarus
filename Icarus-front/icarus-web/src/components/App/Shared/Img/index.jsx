import styles from './img.module.css';

const Img = ({ typeOf, text, src, alt, onClick }) => {

  const styleChange = () => {
    switch(typeOf) {
      case 'main':
        return ({container: styles.mainSettingsContainer, image: styles.mainImageSettings});
      default:
        return ({container: styles.mainSettingsContainer, image: styles.mainImageSettings});
    }
  };

  return (
    <p className={styleChange().container} onClick={onClick}>
      <img src={src} className={styleChange().image} alt={alt}></img>
      { text }
    </p>
  );
};

export default Img;