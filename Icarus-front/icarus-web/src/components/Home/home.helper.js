
export const theTime = ( language ) => {
  const dateNow = new Date();
  const opt = { day: 'numeric', month: 'long', year: 'numeric' };

  switch (language) {
    case 'ES':
      return(dateNow.toLocaleDateString('es-ES', opt));
    case 'EN':
      return(dateNow.toLocaleDateString('en-US', opt));
    default:
      return(dateNow.toLocaleDateString('es-ES', opt));
  }
};
