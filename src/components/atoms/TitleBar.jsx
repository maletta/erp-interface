import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";


const useStyle = (props) => makeStyles(theme => ({
    root: {
        borderRadius: '0px 0px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        height: props.height,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px 0px 8px',
        boxShadow: theme.shadows[1],
    }
}));


const TitleBar = ({ height, label }) => {
    const classes = useStyle({ height })();
    return (
        <Paper className={classes.root}>
            <Typography variant="h5">{label}</Typography>
        </Paper>
    )
};

TitleBar.defaultProps = {
    height: '5hv',
    label: '',
}

TitleBar.propTypes = {
    height: PropTypes.string,
    label: PropTypes.string,
}

export default TitleBar;