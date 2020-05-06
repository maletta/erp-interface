const paletteTypes = {
  accountsPayable: "accountsPayable",
  accountsReceivable: "accountsReceivable",
  cashFlow: "cashFlow",
  procurement: "procurement",
  billing: "billing",
  serviceBilling: "serviceBilling",
  sales: "sales",
  stock: "stock",
  accouting: "accouting",
  payroll: "payroll",
  humanResources: "humanResources",
  fiscal: "fiscal",
  register: "register",
}

const defaultText = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.54)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  hint: 'rgba(0, 0, 0, 0.38)',
}

const defaultSecondary = {
  main: "#034",
}

// contas a pagar
export const accountsPayable = {
  type: "light",
  primary: {
    main: "rgb(192,80,77)",
    light: "rgb(246,231,230)",
    lighter: "rgb(246,246,251)",
    dark: "rgb(192,80,77)",
    contrastText: '#fafafa',
  },
  secondary: {
    ...defaultSecondary,
  },
  text: {
    ...defaultText,
  }
}

// contas a receber
export const accountsReceivable = {
  type: "light",
  primary: {
    main: "rgb(68,107,170)",
    light: "rgb(172,191,222)",
    lighter: "rgb(203,215,235)",
    dark: "rgb(68,107,170)",
    contrastText: '#fafafa',
  },
  secondary: {
    ...defaultSecondary,
  },
  text: {
    ...defaultText,
  },
}

// fluxo de caixa
export const cashFlow = {
  type: "light",
  primary: {
    main: "rgb(146,208,80)",
    light: "rgb(210,236,182)",
    lighter: "rgb(237,247,225)",
    dark: "rgb(146,208,80)",
    contrastText: '#fafafa',
  },
  secondary: {
    ...defaultSecondary,
  },
  text: {
    ...defaultText,
  },
}

// compras - purchase ou procurement and sourcing
export const procurement = {
    type: "light",
    primary: {
      main: "rgb(128,100,162)",
      light: "rgb(195,181,211)",
      lighter: "rgb(226,219,233)",
      dark: "rgb(128,100,162)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// faturamento
export const billing = {
    type: "light",
    primary: {
      main: "rgb(0,204,92)",
      light: "rgb(158,226,166)",
      lighter: "rgb(204,240,208)",
      dark: "rgb(0,204,92)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// faturamento de serviço
export const serviceBilling = {
    type: "light",
    primary: {
      main: "rgb(0,142,64)",
      light: "rgb(125,201,139)",
      lighter: "rgb(199,231,205)",
      dark: "rgb(0,142,64)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// vendas
export const sales = {
    type: "light",
    primary: {
      main: "rgb(0,112,192)",
      light: "rgb(159,214,255)",
      lighter: "rgb(213,237,255)",
      dark: "rgb(0,112,192)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// estoque
export const stock = {
    type: "light",
    primary: {
      main: "rgb(102,51,0)",
      light: "rgb(241,212,169)",
      lighter: "rgb(246,228,202)",
      dark: "rgb(102,51,0)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// contabilidade
export const accouting = {
  palette: {
    type: "light",
    primary: {
      main: "rgb(23,55,94)",
      light: "rgb(172,197,212)",
      lighter: "rgb(225,234,239)",
      dark: "rgb(23,55,94)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
    }
  },
}

// folha de pagamento
export const payroll = {
    type: "light",
    primary: {
      main: "rgb(255,192,0)",
      light: "rgb(255,227,137)",
      lighter: "rgb(235,239,189)",
      dark: "rgb(255,192,0)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// recursos humanos
export const humanResources = {
    type: "light",
    primary: {
      main: "rgb(255,102,0)",
      light: "rgb(251,201,159)",
      lighter: "rgb(253,232,215)",
      dark: "rgb(255,102,0)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// fiscal
export const fiscal = {
    type: "light",
    primary: {
      main: "rgb(128,0,0)",
      light: "rgb(255,179,179)",
      lighter: "rgb(255,221,221)",
      dark: "rgb(128,0,0)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

// cadastro
export const register = {
    type: "light",
    primary: {
      main: "rgb(127,127,127)",
      light: "rgb(217,217,217)",
      lighter: "rgb(242,242,242)",
      dark: "rgb(127,127,127)",
      contrastText: '#fafafa',
    },
    secondary: {
      ...defaultSecondary,
    },
    text: {
      ...defaultText,
  },
}

export default paletteTypes;
