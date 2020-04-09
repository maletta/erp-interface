import React from 'react';
import { default as TextFieldUI } from "@material-ui/core/TextField";
import { makeStyles, lighten } from "@material-ui/core/styles";


const inputVariantType = {
    outlined: (theme, color) => ({
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
    }),
    filled: (theme, color) => ({
        root: {
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].light,
            '&$focused': {
                borderColor: theme.palette[color].dark,
                backgroundColor: theme.palette[color].light,
            },
            '&:hover ': {
                backgroundColor: lighten(theme.palette[color].light, 0.5),
            },
        },
        focused: { /* empty */ },
        underline: {
            '&::after': {
                borderBottomColor: theme.palette[color].main,
            }
        },
    }),
}


export function mountInputStyles(theme, paletteColor, variant = "filled") {
    console.log('variant ', variant);
    const color = paletteColor ? paletteColor : 'primary';
    return inputVariantType[variant](theme, color);

}

export const useStylesLabel = makeStyles(theme => (
    {
        root: {
            fontSize: '0.8rem',
            color: theme.palette['primary'].contrastText,
            textTransform: 'uppercase',
            '&$focused': {
                color: theme.palette['primary'].contrastText,
            },
        },
        focused: {},
        disabled: {},
    }
));/* ,{ name: 'MuiInputLabel' }  to edit all*/


const TextField = ({ color, ...props }) => {
    const inputClasses = makeStyles(theme => mountInputStyles(theme, color, props.variant))();
    const InputProps = {
        classes: {
            root: inputClasses.root,
            notchedOutline: inputClasses.notchedOutline,
            focused: inputClasses.focused,
            underline: inputClasses.underline,
        },
    };
    const labelClasses = useStylesLabel();
    return <TextFieldUI {...props}

        InputProps={InputProps}
        InputLabelProps={{ classes: labelClasses }}
    />;
}


export default TextField;