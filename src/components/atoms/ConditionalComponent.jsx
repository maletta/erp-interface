import React from 'react';
import PropTypes from 'prop-types';

const ConditionalComponent = ({ condition, children }) => (
    <React.Fragment>
        {
            condition ? children : false
        }
    </React.Fragment>
)

ConditionalComponent.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default ConditionalComponent;