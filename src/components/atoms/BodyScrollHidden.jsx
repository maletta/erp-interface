import React, { useEffect } from 'react';
import PropTypes from 'prop-types';



// Esconder scroll por causar o spacing negativo do Material UI
// Aparentemente o componente <Grid container> que gera spacing negativo 
const BodyScrollHidden = ({ children }) => {
    document.body.style.overflowX = "hidden";
    useEffect(() => {
        return function adjustBody() {
            document.body.style.overflowX = "auto";
        }
    }, [])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}


BodyScrollHidden.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BodyScrollHidden;
