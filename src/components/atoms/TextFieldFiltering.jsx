import React from "react";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import moment from "moment";
import PropTypes from 'prop-types';
import {
    ContainsIcon, DoesNotContainIcon, DoesNotEqualIcon, EndsWithIcon, EqualsIcon,
    LessThanIcon, LessThanOrEqualToIcon, GreaterThanIcon, GreaterThanOrEqualToIcon,
    MonthEqualsIcon, StartsWithIcon,
} from '../../assets/icons';
import { makeStyles } from '@material-ui/core/styles';



const contentType = {
    date: "date",
    number: "number",
    text: "text",
}

const filteringMethodType = {
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

const switchIcon =
{
    [filteringMethodType.contains]: ContainsIcon,
    [filteringMethodType.doesNotContain]: DoesNotContainIcon,
    [filteringMethodType.doesNotEqual]: DoesNotEqualIcon,
    [filteringMethodType.endsWith]: EndsWithIcon,
    [filteringMethodType.equals]: EqualsIcon,
    [filteringMethodType.lessThan]: LessThanIcon,
    [filteringMethodType.lessThanOrEqualTo]: LessThanOrEqualToIcon,
    [filteringMethodType.greaterThan]: GreaterThanIcon,
    [filteringMethodType.greaterThanOrEqualTo]: GreaterThanOrEqualToIcon,
    [filteringMethodType.monthEquals]: MonthEqualsIcon,
    [filteringMethodType.startsWith]: StartsWithIcon,

}

const switchIcon2 = (
    {
        [filteringMethodType.contains]: './icons/contains.svg',
        [filteringMethodType.doesNotContain]: './icons/doesNotContain.svg',
        [filteringMethodType.doesNotEqual]: './icons/doesNotEqual.svg',
        [filteringMethodType.endsWith]: './icons/endsWith.svg',
        [filteringMethodType.equals]: './icons/equals.svg',
        [filteringMethodType.lessThan]: './icons/lessThan.svg',
        [filteringMethodType.lessThanOrEqualTo]: './icons/lessThanOrEqualTo.svg',
        [filteringMethodType.greaterThan]: './icons/greaterThan.svg',
        [filteringMethodType.greaterThanOrEqualTo]: './icons/greaterThanOrEqualTo.svg',
        [filteringMethodType.monthEquals]: './icons/monthEquals.svg',
        [filteringMethodType.startsWith]: './icons/startsWith.svg',

    }
)

const switchLabel = (
    {
        [filteringMethodType.contains]: "Contém",
        [filteringMethodType.doesNotContain]: "Não contém",
        [filteringMethodType.doesNotEqual]: "Não é igual a",
        [filteringMethodType.endsWith]: "Termina com",
        [filteringMethodType.equals]: "É igual a",
        [filteringMethodType.lessThan]: "Menor que",
        [filteringMethodType.lessThanOrEqualTo]: "Menor que ou igual a",
        [filteringMethodType.greaterThan]: "Maior que",
        [filteringMethodType.greaterThanOrEqualTo]: "Maior que ou igual a",
        [filteringMethodType.monthEquals]: "Mês igual a",
        [filteringMethodType.startsWith]: "Começa com",

    }
);

const filteringMethod = {
    [filteringMethodType.contains]: (content, filter) => `${content}`.includes(filter),
    [filteringMethodType.doesNotContain]: (content, filter) => !`${content}`.includes(filter),
    [filteringMethodType.doesNotEqual]: (content, filter) => !(`${content}` === `${filter}`),
    [filteringMethodType.endsWith]: (content, filter) => `${content}`.endsWith(`${filter}`),
    [filteringMethodType.equals]: (content, filter) => `${content}` === `${filter}`,
    [filteringMethodType.lessThan]: (content, filter) => parseInt(content, 10) < parseInt(filter, 10),
    [filteringMethodType.lessThanOrEqualTo]: (content, filter) => parseInt(content, 10) <= parseInt(filter, 10),
    [filteringMethodType.greaterThan]: (content, filter) => parseInt(content, 10) > parseInt(filter, 10),
    [filteringMethodType.greaterThanOrEqualTo]: (content, filter) => parseInt(content, 10) >= parseInt(filter, 10),
    [filteringMethodType.monthEquals]: (content, filter) => parseInt(moment(`${content}`).format('M'), 10) == parseInt(filter, 10), // deixo só == pq o mês é um caractere, do banco 2 caracteres. logo 8 === 08 é false   
    [filteringMethodType.startsWith]: (content, filter) => `${content}`.startsWith(`${filter}`),
}

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
        opacity: '0.54',
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

const mountMenuItem = ({ classes, filteringMethodType, handleClose }) => (
    <MenuItem onClick={handleClose} className={classes.menuItem}> <img src={switchIcon[filteringMethodType]} alt="filtered icon" className={classes.logo} /> <span>{switchLabel[filteringMethodType]}</span></MenuItem>
);

const filteringMethodByType = {
    [contentType.number]: [filteringMethodType.equals, filteringMethodType.doesNotEqual, filteringMethodType.greaterThan,
    filteringMethodType.greaterThanOrEqualTo, filteringMethodType.lessThan, filteringMethodType.lessThanOrEqualTo],

    [contentType.date]: [filteringMethodType.monthEquals, filteringMethodType.contains,
    filteringMethodType.startsWith, filteringMethodType.endsWith],

    [contentType.text]: [filteringMethodType.contains, filteringMethodType.doesNotContain, filteringMethodType.startsWith,
    filteringMethodType.endsWith, filteringMethodType.equals, filteringMethodType.doesNotEqual],
}



const TextFieldFiltering = ({ type, currentMethod, onInputChange, onMethodChange }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = ({ method }) => {
        //console.log(`perdeu o foco `, method);
        const newMethod = method ? method : currentMethod;
        onMethodChange(newMethod);
        setAnchorEl(null);
    };

    const handleInputChange = (e) => {
        const newValue = e.currentTarget.value;
        onInputChange(newValue);
    }
    // console.log('text filtering mount ', currentMethod);
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
    type: contentType.text,
    currentMethod: filteringMethodType.contains,
    onMethodChange: () => { },
    onInputChange: () => { },
}

TextFieldFiltering.propTypes = {
    type: PropTypes.oneOf([contentType.date, contentType.number, contentType.text]),
    currentMethod: PropTypes.oneOf(Object.keys(filteringMethodType)),
    onMethodChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}

export default TextFieldFiltering;
export {
    filteringMethod,
    filteringMethodType,
};