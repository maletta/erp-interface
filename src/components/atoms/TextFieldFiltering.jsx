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

const TextFieldFiltering = ({ type, currentMethod, onChange }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (newMethod) => {
        // console.log(newMethod);
        onChange(newMethod);
        setAnchorEl(null);
    };
    console.log('rapaz ',currentMethod);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton edge="start" className={classes.logoButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <img src={switchIcon[currentMethod]} alt="icone de filtragem" className={classes.logo} />
            </IconButton>
            <InputBase placeholder={'Filtro...'} className={classes.input}  />
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    filteringMethodByType[type].map((method, index) => (
                        <MenuItem key={`${index}`} onClick={() => handleClose(method)} className={classes.menuItem}>
                            <img src={switchIcon[method]} alt="icone de filtragem" className={classes.logo} />
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
    onChange: () => {},
}

TextFieldFiltering.propTypes = {
    type: PropTypes.oneOf([filteringType.date, filteringType.number, filteringType.text]),
    currentMethod: PropTypes.oneOf(Object.keys(filteringMethod)),
    onChange: PropTypes.func.isRequired,
}

export default TextFieldFiltering;
export {
    filteringMethod
};