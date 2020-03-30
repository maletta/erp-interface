import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { default as TabsUI } from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const appearance = {
    firstLevel: 'firstLevel',
    secondLevel: 'secondLevel',
    thirdLevel: 'thirdLevel',
}

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}



const switchAppearence = (theme, option) => {
    const newTheme = (backgroundMain, backgroundSecondary, colorMain, colorSecondary) => ({
        backgroundMain,
        backgroundSecondary,
        colorMain,
        colorSecondary,
    });

    switch (option) {
        case appearance.firstLevel:
            return newTheme(
                theme.palette.common.white,
                theme.palette.primary.main,
                theme.palette.common.white,
                theme.palette.primary.main,
            );
        case appearance.secondLevel:
            return newTheme(
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.common.white,
                theme.palette.common.black,
            );
        case appearance.thirdLevel:
            return newTheme(
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.common.white,
                theme.palette.common.black,
            );
        default:
            return newTheme(
                theme.palette.common.white,
                theme.palette.primary.main,
                theme.palette.common.white,
                theme.palette.primary.main,
            );
    }
}

const useStyle = appearance => makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: appearance.backgroundMain,
        width: '100%',
        boxShadow: theme.shadows[1],
    },
    tabs: {
        "& .MuiTabs-scroller": {
            // color: 'blue',
            "& > span": { // tab indicator
                backgroundColor: 'transparent',
            },
            "& .MuiTab-root": {
                backgroundColor: appearance.backgroundMain,
                color: appearance.colorSecondary,
                transition: 'background-color 300ms',
            },
            "& .Mui-selected": {
                backgroundColor: appearance.backgroundSecondary,
                color: appearance.colorMain,
            }
        }
    },
    tab: {

    },
}));




const Tabs = ({ currentValue, handleClick, tabsOptions, variant }) => {
    const theme = useTheme();
    const classes = useStyle(switchAppearence(theme, variant))();
    // para controlar qual tab está ativa
    // const [value, setValue] = useState(0);

    //define qual opção está selecionada
    const handleChange = (event, newValue) => {

        handleClick(newValue);
    };
    return (
        <div className={classes.root}>
            <TabsUI value={currentValue} className={classes.tabs} onChange={handleChange} aria-label="Grupo de guias de navegação" >
                {
                    tabsOptions.map(tab => (
                        <Tab
                            key={`${tab.index}`}
                            className={classes.tab}
                            value={tab.index}
                            label={`${tab.label}`}
                            wrapped
                            {...a11yProps(tab.index)}
                        />
                    ))
                }
            </TabsUI>
        </div>
    )
}


Tabs.defaultProps = {
    currentValue: 0,
    tabsOptions: [],
    variant: appearance.firstLevel,
}

Tabs.propTypes = {
    currentValue: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    tabsOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            index: PropTypes.number.isRequired,
        }),
    ),
    variant: PropTypes.oneOf(Object.keys(appearance)),
}

export default Tabs;