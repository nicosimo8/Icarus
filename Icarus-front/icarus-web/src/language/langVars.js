
export const homeVars = (language) => {
  switch (language) {
    case 'ES':
      return ({welcomeMessage: "¡¡¡Bienvenido a Icaro!!!", warningMessage: "Ya puede operar", settingsBtnText: "Configuración", statusPanelText: "Panel de estado"});
    case 'EN':
      return ({welcomeMessage: "¡¡¡Welcome to Icaro!!!", warningMessage: "Now you can operate", settingsBtnText: "Settings", statusPanelText: "Status panel"});
    default:
      return ({welcomeMessage: "¡¡¡Bienvenido a Icaro!!!", warningMessage: "Ya puede operar", settingsBtnText: "Configuración", statusPanelText: "Panel de estado"});
  }
};

export const wagonVars = (language) => {
  switch (language) {
    case 'ES':
      return ({ wagonNum: "Vagón.N°", tare: "Tara", raw: "Bruto", net: "Neto" });
    case 'EN':
      return ({ wagonNum: "Wagon.N°", tare: "Tare", raw: "Raw", net: "Clean" });
    default:
      return ({ wagonNum: "Vagón.N°", tare: "Tara", raw: "Bruto", net: "Neto" });
  }
};

export const sealVars = (language) => {
  switch (language) {
    case 'ES':
      return ({ wagon: 'Vagón.N°', loadSeals: 'Cargar precintos' })
    case 'EN':
      return ({ wagon: 'Wagon.N°', loadSeals: 'Load seals' })
    default:
      return ({ wagon: 'Vagón.N°', loadSeals: 'Cargar precintos' })
  }
};

export const ticketVars = (language) => {
  switch (language) {
    case 'ES':
      return ({
        titleText: 'Detalle operativo actual',
        operation: 'Operativo.N°:',
        wagonsQuantity: 'Cantidad de vagones:',
        wagonNum: 'Vagón.N°',
        tare: 'Tara',
        raw: 'Bruto',
        net: 'Neto'
      });
    case 'EN':
      return ({
        titleText: 'Current operation detail',
        operation: 'Operation.N°:',
        wagonsQuantity: 'Wagons quantity:',
        wagonNum: 'Wagon.N°',
        tare: 'Tare',
        raw: 'Raw',
        net: 'Net'
      });
    default:
      return ({
        titleText: 'Detalle operativo actual',
        operation: 'Operativo.N°:',
        wagonsQuantity: 'Cantidad de vagones:',
        wagonNum: 'Vagón.N°',
        tare: 'Tara',
        raw: 'Bruto',
        net: 'Neto'
      });
  }
}

export const settingsVars = (language) => {
  switch (language) {
    default:
      return {config: 'Configuración', users: 'Usuarios', valManual: 'Pesaje manual', ports: 'Puertos de conexión', bascName: 'Nombre de la báscula', point: 'Indicador'};
  }
}

export const buttonVars = () => {

};

export const inputVars = () => {

};

export const formVars = () => {

};
