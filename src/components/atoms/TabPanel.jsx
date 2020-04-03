import React from "react"
import { makeStyles, lighten } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';


const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        //overflowY: 'auto',
        //overflowX: 'auto',
        width: '100%',
        //display: 'flex',
        //flexDirection: 'column',
    },
    tabPabelTitle: {
        marginBottom: theme.spacing(1),
        height: '48px',
        maxHeight: '48px',
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: '1.2em',
    },
    icon: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderRadius: "0px 0px",
        marginLeft: '4px',
        "&:hover ": {
            backgroundColor: lighten(theme.palette.primary.main, 0.4),
            color: theme.palette.common.black,
        }
    },
    separator: {
        borderTopColor: theme.palette.primary.main,
        borderTopStyle: 'solid',
        borderTopWidth: '4px',
    }
}))

const haveTopButtons = (func1, func2, func3, func4) => {
    return (func1 || func2 || func3 || func4) !== undefined;
}

const TabPanelTitle = ({ classes, handleAttach, handleCancel, handleDelete, handleSave, title }) => {
    return (
        <Grid container className={classes.tabPabelTitle}>
            <Grid container item xs={6} sm={6} alignContent={'center'} className={classes.title}>
                {title}
            </Grid>
            <Grid container item xs={6} sm={6} justify="flex-end" >
                {handleDelete !== undefined && <IconButton className={classes.icon}> <DeleteIcon /></IconButton>}
                {handleAttach !== undefined && <IconButton className={classes.icon}><AttachFileIcon /> </IconButton>}
                {handleSave !== undefined && <IconButton className={classes.icon}><CheckIcon /></IconButton>}
                {handleCancel !== undefined && <IconButton className={classes.icon}><CloseIcon /></IconButton>}
            </Grid>
        </Grid>
    )
}


const TabPanel = ({ children, currentValue, index, handleAttach, handleCancel, handleDelete, handleSave, title }) => {
    const classes = useStyle();
    const functions = [handleAttach, handleCancel, handleDelete, handleSave];
    const haveSeparator = haveTopButtons(...functions);
    return (
        <div className={clsx({ [classes.root]: true, [classes.separator]: haveSeparator })} hidden={currentValue !== index} >
           {
               (haveSeparator || title) &&
               <TabPanelTitle classes={classes}
               handleAttach={handleAttach}
               handleCancel={handleCancel}
               handleDelete={handleDelete}
               handleSave={handleSave}
               title={title}
           />
           }

            {children}
        </div>
    );
}


TabPanel.defaultProps = {
    title: '',
}

TabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired,
    children: PropTypes.any,
    handleAttach: PropTypes.func,
    handleCancel: PropTypes.func,
    handleDelete: PropTypes.func,
    handleSave: PropTypes.func,
    title: PropTypes.string,
};

export default TabPanel;