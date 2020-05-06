import React from 'react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/';
import Connect from '../../state/store/connect';

const EnhancedThemeProvider = ({children, dispatch, theme})=> {
    const newTheme = createMuiTheme({
        ...theme,
        overrides: {
          // MuiCssBaseline: {
          //   '@global': {
          //     fontSize: 2 
          //   },
          // },
        },
      });
    return (
        <ThemeProvider theme={responsiveFontSizes(newTheme)}>
            {children}
        </ThemeProvider>
    )
}

const mapStateToProps = ({ theme }, props) => {
    return {
        theme,
        ...props
    };
};

export default Connect(mapStateToProps)(EnhancedThemeProvider);