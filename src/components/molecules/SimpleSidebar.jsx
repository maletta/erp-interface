import React from 'react';
import SimpleCard from '../atoms/SimpleCard';
import BalanceCard from '../atoms/BalanceCard';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const SimpleSidebar = ({ simpleCard, balanceCard }) => {
    return (

                <React.Fragment >
                    {balanceCard.map((card, index) => <BalanceCard key={`${index}`} {...card} />)}
                    {simpleCard.map((card, index) => <SimpleCard key={`${index}${card.content}`} {...card} />)}
                </React.Fragment>
   
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