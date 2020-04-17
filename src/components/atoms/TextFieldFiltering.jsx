import React from "react";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import {
    ContainsIcon, DoesNotContainIcon, DoesNotEqualIcon, EndsWithIcon, EqualsIcon,
    LessThanIcon, LessThanOrEqualToIcon, GreaterThanIcon, GreaterThanOrEqualToIcon,
    MonthEqualsIcon, StartsWithIcon,
} from '../../assets/icons';
import { makeStyles } from '@material-ui/core/styles';



const filteringType = {
    date: "date",
    number: "number",
    text: "text",
}

const filteringMethod = {
    contains: "contains",
    doesNotContain: "doesNotContain",
    doesNotEqual: "doesNotEqual",
    endsWith: "endsWith",
    equals: "equals",
    lessThan: "lessThan",
    lessThanOrEqualTo: "lessThanOrEqualTo",
    greaterThan: "greaterThan",
    greaterThanOrEqualTo: "greaterThanOrEqualTo",
    monthEquals: "monthEquals",
    startsWith: "startsWith",
}

const switchIcon = (
    {
        [filteringMethod.contains]: ContainsIcon,
        [filteringMethod.doesNotContain]: DoesNotContainIcon,
        [filteringMethod.doesNotEqual]: DoesNotEqualIcon,
        [filteringMethod.endsWith]: EndsWithIcon,
        [filteringMethod.equals]: EqualsIcon,
        [filteringMethod.lessThan]: LessThanIcon,
        [filteringMethod.lessThanOrEqualTo]: LessThanOrEqualToIcon,
        [filteringMethod.greaterThan]: GreaterThanIcon,
        [filteringMethod.greaterThanOrEqualTo]: GreaterThanOrEqualToIcon,
        [filteringMethod.monthEquals]: MonthEqualsIcon,
        [filteringMethod.startsWith]: StartsWithIcon,

    }
)

const switchIcon2 = (
    {
        [filteringMethod.contains]: './icons/contains.svg',
        [filteringMethod.doesNotContain]: './icons/doesNotContain.svg',
        [filteringMethod.doesNotEqual]: './icons/doesNotEqual.svg',
        [filteringMethod.endsWith]: './icons/endsWith.svg',
        [filteringMethod.equals]: './icons/equals.svg',
        [filteringMethod.lessThan]: './icons/lessThan.svg',
        [filteringMethod.lessThanOrEqualTo]: './icons/lessThanOrEqualTo.svg',
        [filteringMethod.greaterThan]: './icons/greaterThan.svg',
        [filteringMethod.greaterThanOrEqualTo]: './icons/greaterThanOrEqualTo.svg',
        [filteringMethod.monthEquals]: './icons/monthEquals.svg',
        [filteringMethod.startsWith]: './icons/startsWith.svg',

    }
)

const switchLabel = (
    {
        [filteringMethod.contains]: "Contém",
        [filteringMethod.doesNotContain]: "Não contém",
        [filteringMethod.doesNotEqual]: "Não é igual a",
        [filteringMethod.endsWith]: "Termina com",
        [filteringMethod.equals]: "É igual a",
        [filteringMethod.lessThan]: "Menor que",
        [filteringMethod.lessThanOrEqualTo]: "Menor que ou igual a",
        [filteringMethod.greaterThan]: "Maior que",
        [filteringMethod.greaterThanOrEqualTo]: "Maior que ou igual a",
        [filteringMethod.monthEquals]: "Mês igual a",
        [filteringMethod.startsWith]: "Começa com",

    }
);

const useStyles = makeStyles(theme => ({
    input: {
        fontSize: '0.9em',
    },
    logoButton: {
        borderRadius: '0px',
        padding: '0px',
    },
    logo: {
        height: '24px',
        padding: '0px 0px',
    },
    menuItem: {
        display: 'grid',
        //justifyContent: 'space-between'
        gridTemplateColumns: '32px 1fr',
        gap: '5px'
    },
    root: {
        width: '100%',
        minWidth: '80px',
        height: '32px',
        borderBottom: 'black 1px solid',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '32px',
    },

}));

const mountMenuItem = ({ classes, filteringMethod, handleClose }) => (
    <MenuItem onClick={handleClose} className={classes.menuItem}> <img src={switchIcon[filteringMethod]} alt="filtered icon" className={classes.logo} /> <span>{switchLabel[filteringMethod]}</span></MenuItem>
);

const filteringMethodByType = {
    [filteringType.number]: [filteringMethod.equals, filteringMethod.doesNotEqual, filteringMethod.greaterThan,
    filteringMethod.greaterThanOrEqualTo, filteringMethod.lessThan, filteringMethod.lessThanOrEqualTo],

    [filteringType.date]: [filteringMethod.monthEquals, filteringMethod.contains,
    filteringMethod.startsWith, filteringMethod.endsWith],

    [filteringType.text]: [filteringMethod.contains, filteringMethod.doesNotContain, filteringMethod.startsWith,
    filteringMethod.endsWith, filteringMethod.equals, filteringMethod.doesNotEqual],
}

const TextFieldFiltering = ({ type, currentMethod, onInputChange, onMethodChange }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = ({ method }) => {
        console.log(`perdeu o foco `, method);
        onMethodChange(method);
        setAnchorEl(null);
    };

    const handleInputChange = (e) => {
        const newValue = e.currentTarget.value;
        onInputChange(newValue);
    }
    console.log('text filtering mount ', currentMethod);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton edge="start" className={classes.logoButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <img src={switchIcon2[currentMethod]} alt="i" className={classes.logo} />
            </IconButton>
            <InputBase placeholder={'Filtro...'} className={classes.input} onChange={handleInputChange} />
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    filteringMethodByType[type].map((method, index) => (
                        <MenuItem key={index} onClick={() => handleClose({ method })} className={classes.menuItem} >
                            <img src={switchIcon2[method]} alt="icone de filtragem" className={classes.logo} />
                            <span>{switchLabel[method]}</span>
                        </MenuItem>

                    ))
                }
            </Menu>
        </div>
    )
}

TextFieldFiltering.defaultProps = {
    type: filteringType.text,
    currentMethod: filteringMethod.contains,
    onMethodChange: () => { },
    onInputChange: () => { },
}

TextFieldFiltering.propTypes = {
    type: PropTypes.oneOf([filteringType.date, filteringType.number, filteringType.text]),
    currentMethod: PropTypes.oneOf(Object.keys(filteringMethod)),
    onMethodChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}

export default TextFieldFiltering;
export {
    filteringMethod
};