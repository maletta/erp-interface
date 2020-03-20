import React from 'react';
import { default as TextFieldUI } from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

function mountInputStyles(theme, paletteColor) {
    const color = paletteColor ? paletteColor : 'primary';
    return {
        root: {
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].light,
            '&:hover $notchedOutline': {
                borderColor: theme.palette[color].main,
            },
            '&$focused $notchedOutline': {
                borderColor: theme.palette[color].dark,
            },
        },
        outlinedRoot: {
            '&:hover $notchedOutline': {
                borderColor: theme.palette[color].light,
            },
            '&$focused $notchedOutline': {
                borderColor: theme.palette[color].light,
            },
        },
        outlined: {
            '&$focused $notchedOutline': {
                borderColor: theme.palette[color].main,
            },
        },
        notchedOutline: {
            /* default color */
            borderColor: theme.palette[color].light,
        },
        focused: { /* empty */ },
    }

}

const useStylesLabel = makeStyles(theme => (
    {
        root: {
            color: '#000',
            textTransform: 'uppercase',
            '&$focused': {
                color: '#000',
            },
        },
        focused: {},
        disabled: {},
    }
));/* ,{ name: 'MuiInputLabel' }  to edit all*/


const TextField = (props) => {
    const inputClasses = makeStyles(theme => mountInputStyles(theme, props.color))();
    const InputProps = {
        classes: {
            root: inputClasses.root,
            notchedOutline: inputClasses.notchedOutline,
            focused: inputClasses.focused,
        },
    };
    const labelClasses = useStylesLabel();
    return <TextFieldUI {...props}
        variant="outlined"
        InputProps={InputProps}
        InputLabelProps={{ classes: labelClasses }}
    />;
}


export default TextField;