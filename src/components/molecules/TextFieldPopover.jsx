import React from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FilteredTable, { createHeadersData } from "./FilteredTable";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import PropTypes from "prop-types";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "../atoms/TextField";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    popoverContent: {
        minWidth: '200px',
        minHeight: '200px',
        height: '100%',
        // padding: theme.spacing(2),
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    tableContainer: {
        maxWidth: '450px',
        maxHeight: '400px',
        overflow: 'auto',
    },
    titleContainer: {
        width: '100%',
        borderRadius: '0px 0px',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: theme.shadows[2],
    }

}));


const TextFieldPopover = ({ columnTarget, data, title, currentValue, setCurrentValue,...props }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRowClick = (row)=>{
        const column = columnTarget ? columnTarget : Object.keys(data[0])[0];
        // console.log(`column, `, column,Object.keys(data[0])[0], row)
        setCurrentValue(row[column]);
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const inputProps = {
        readOnly: false,
    }
    const InputProps = {
        endAdornment: <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
                onMouseDown={() => { }}
            >
                <SearchIcon />
            </IconButton>
        </InputAdornment>,
    }


    return (
        <React.Fragment>
            <TextField {...props} 
            inputProps={inputProps} 
            InputProps={InputProps} 
            value={currentValue} 
            
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={classes.popoverContent}>
                    <Grid container>
                        <Paper className={classes.titleContainer}>
                            <Typography variant="h6"> {title} </Typography>
                        </Paper>
                    </Grid>
                    <Grid container>
                        <div className={classes.tableContainer}>
                            <FilteredTable
                                checkboxColumn={false}
                                header={createHeadersData(data)}
                                paginationHeight={'8vh'}
                                rowClick={handleRowClick}
                                rows={data}
                                tableHeight={'73vh'}
                                toolbarHeight={'9vh'}
                            />
                        </div>

                    </Grid>

                </div>
            </Popover>
        </React.Fragment>
    )

}

export default TextFieldPopover;

TextFieldPopover.propTypes = {
    columnTarget: PropTypes.string, // coluna da qual o valor será selecionado
    currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    setCurrentValue: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,// array de objetos que definem a tabela
    title: PropTypes.string, 
}