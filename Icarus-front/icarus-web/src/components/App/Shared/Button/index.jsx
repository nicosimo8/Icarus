import styles from './button.module.css';

const Button = ({ language = 'ES', type, onClick, typeOf }) => {
  let btnText = '';

  const getLangVars = () => {
    switch (language) {
      case 'ES':
        return {
          submit: 'Enviar',
          clean: 'Limpiar',
          close: 'Cerrar',
          load: 'Cargar',
          back: 'Atrás',
          newWagon: 'Nuevo vagón',
          loadSeals: 'Cargar precintos',
          done: 'Finalizar',
          loadNewWagon: 'Cargar nuevo vagón',
          continue: 'Continuar operación',
          lang: 'Idioma',
          new: 'Nuevo'
        };
      case 'EN':
        return {
          submit: 'Submit',
          clean: 'Clean',
          close: 'Close',
          load: 'Load',
          back: 'Back',
          newWagon: 'New wagon',
          loadSeals: 'Load seals',
          done: 'Done',
          loadNewWagon: 'Load new wagon',
          continue: 'Continue the operation',
          lang: 'Language',
          new: 'New'
        };
      default:
        return {
          submit: 'Enviar',
          clean: 'Limpiar',
          close: 'Cerrar',
          load: 'Cargar',
          back: 'Atrás',
          newWagon: 'Nuevo vagón',
          loadSeals: 'Cargar precintos',
          done: 'Finalizar',
          loadNewWagon: 'Cargar nuevo vagón',
          continue: 'Continuar operación',
          lang: 'Idioma',
          new: 'Nuevo'
        };
    }
  }

  const getTypeClassName = () => {
    switch (type) {
      case 'submit':
        btnText = getLangVars().submit;
        return styles.submitBtn;
      case 'clean':
        btnText = getLangVars().clean;
        return styles.cleanBtn;
      case 'load':
        btnText = getLangVars().load;
        return styles.submitBtn;
      case 'loadNewWagon':
        btnText = getLangVars().loadNewWagon;
        return styles.mainButtonLoad;
      case 'continue':
        btnText = getLangVars().continue;
        return styles.mainButtonLoad;
      case 'close':
        btnText = '';
        return styles.closeBtn;
      case 'print':
        btnText = '';
        return styles.printBtn;
      case 'exit':
        btnText = getLangVars().close;
        return styles.submitBtn;
      case 'language':
        btnText = getLangVars().lang;
        return styles.langBtn;
      case 'newWagon':
        btnText = getLangVars().newWagon;
        return styles.submitBtn;
      case 'loadSeals':
        btnText = getLangVars().loadSeals;
        return styles.loadSeals;
      case 'loadSealsConfirm':
        btnText = getLangVars().loadSeals;
        return styles.submitBtn;
      case 'done':
        btnText = getLangVars().done;
        return styles.submitBtn;
      case 'back':
        btnText = getLangVars().back;
        return styles.submitBtn;
      case 'new':
        btnText = '';
        return styles.newBtn;
      default:
        return styles.btn;
    };
  };

  return(
    <button type={typeOf} className={`${getTypeClassName()}`} onClick={onClick}>{ btnText }</button>
  );
};

export default Button;