import React from 'react';
import SimpleCard from '../atoms/SimpleCard';
import BalanceCard from '../atoms/BalanceCard';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => (
    {
        root: {
            padding: theme.spacing(1),
            paddingTop: '0px',
            paddingRight: '4px',
        },
    }
));

const SimpleSidebar = ({ simpleCard, balanceCard }) => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <React.Fragment >
                {balanceCard.map((card, index) => <BalanceCard key={`${index}`} {...card} />)}
                {simpleCard.map((card, index) => <SimpleCard key={`${index}${card.content}`} {...card} />)}
            </React.Fragment>
        </div>

    )
}


SimpleSidebar.defaultProps = {
    balanceCard: [],
    simpleCard: [],
}

SimpleSidebar.propTypes = {
    balanceCard: PropTypes.array,
    simpleCard: PropTypes.array,
}

export default SimpleSidebar;