import React, { useState, useEffect } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import clsx from "clsx";
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import moment from "moment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import { default as TableUI } from '@material-ui/core/Table';
import Switch from '@material-ui/core/Switch';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TextFieldFiltering, { filteringMethod } from '../atoms/TextFieldFiltering';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles, lighten } from "@material-ui/core/styles";

/*
TotalHeight = 90vh
{
    Toobar: 9vh
    TableContainer: 73vh
    TalePagination: 8vh
}
*/


export const createHeadersData = (data) => { // adiciona propriedades para o header
    const keys = Object.keys(data[0]);
    return keys.map((column, index) => {
        const regex = /^-?[0-9]?[0-9,\.]+$/; // regex identifica se é número 

        return {
            columnName: column,
            numeric: regex.test(data[0][column]) ? true : false,
            isDate: moment(data[0][column], "YYYY-MM-DD").isValid(),
            disablePadding: index === 0 ? true : false,
            label: column,
        }
    })
}

function descendingComparator(a, b, orderByColumn) {
    if (b[orderByColumn] < a[orderByColumn]) {
        return -1;
    }
    if (b[orderByColumn] > a[orderByColumn]) {
        return 1;
    }
    return 0;
}

function getComparator(orderAscDesc, orderByColumn) {
    return orderAscDesc === 'desc'
        ? (a, b) => descendingComparator(a, b, orderByColumn)
        : (a, b) => -descendingComparator(a, b, orderByColumn);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getOrderedList(rows, orderAscDesc, orderByColumn) {
    return stableSort(rows, getComparator(orderAscDesc, orderByColumn));
}

function getFilteredList(rows, filters){

}

const EnhancedTableHead = (props) => {
    const { headerCells, orderByColumn, orderAscDesc, numSelected, rowCount, onRequestSort, onSelectAllClick, classes } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'selecionar todas as linhas' }}
                    />
                </TableCell>
                {
                    headerCells.map((cell, index) => {
                        return (
                            <TableCell
                                key={index}
                                align="center"
                                // padding={cell.disablePadding ? 'none' : 'default'}
                                padding={'default'}
                                sortDirection={orderByColumn === cell.columnName ? orderAscDesc : false} >
                                <TableSortLabel
                                    active={cell.columnName === orderByColumn}
                                    direction={orderByColumn === cell.columnName ? orderAscDesc : 'asc'}
                                    onClick={createSortHandler(cell.columnName)}
                                    hideSortIcon={true}
                                >
                                    {cell.columnName}
                                    {orderByColumn === cell.columnName ?
                                        <span className={classes.visuallyHidden}>
                                            {orderAscDesc === 'desc' ? 'ordem decrescente' : 'orderm ascendente'}
                                        </span> : null
                                    }
                                </TableSortLabel>
                            </TableCell>
                        )

                    })
                }
            </TableRow>
        </TableHead>
    )
}

EnhancedTableHead.propTypes = {
    headerCells: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    orderAscDesc: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderByColumn: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


const FilteringTableHead = ({ handleChangeFilterMethod, handleChangeInputFilterMethod, headerCells, columnFilters }) => {
    //currentMethod={columnFilters[cell.columnFilters]}

    return (
        <TableHead>
            <TableRow>
                <TableCell padding={'none'} />
                {
                    headerCells.map((cell, index) => (
                        <TableCell key={index}>
                            <TextFieldFiltering
                                currentMethod={columnFilters[cell.columnName].currentMethod}
                                onInputChange={(newValue) => handleChangeInputFilterMethod(cell.columnName, newValue)}
                                onMethodChange={(newMethod) => handleChangeFilterMethod(cell.columnName, newMethod)}
                                type={columnFilters[cell.columnName].isDate ? "date": (columnFilters[cell.columnName].numeric ? 'number' : 'text') }
                            />
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

const useToolbarStyles = ({ toolbarHeight }) => {
    return makeStyles(theme => ({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
            // height: toolbarHeight, //'9vh'
        },
        highlight:
            theme.palette.type === 'light'
                ? {
                    color: theme.palette.secondary.main,
                    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
                }
                : {
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.secondary.dark,
                },
        title: {
            flex: '1 1 100%',
        },
    }));
}

const EnhancedTableToolbar = props => {
    const { numSelected, title, toolbarHeight } = props;
    const classes = useToolbarStyles({ toolbarHeight: toolbarHeight })();
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selecionado(s)
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle">
                        {title}
                    </Typography>
                )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <React.Fragment>
                        <Tooltip title="Filter list">
                            <IconButton aria-label="filter list">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                        <OutlinedInput placeholder="pesquisar" />
                    </React.Fragment>
                )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    title: PropTypes.string,
    toolbarHeight: PropTypes.string,
};

const useStyles = ({ paginationHeight, tableHeight }) => {
    console.log('paginationHeight, tableHeight ', paginationHeight, tableHeight);

    return makeStyles(theme => ({
        root: {
            width: '100%',
            maxHeight: '100%',
            "& .MuiTableSortLabel-root": {
                color: theme.palette.primary.main,
                "&:hover": {
                    color: theme.palette.common.black,
                }
            },
            "& .MuiTableSortLabel-active": {
                color: theme.palette.primary.main,
            },
        },
        paper: {
            borderRadius: '0px 0px',
            width: '100%',
            height: '100%',
            // marginBottom: theme.spacing(2),
            boxShadow: theme.shadows[3],
            padding: '0px 4px 0px 4px',
        },
        table: {
            /* minWidth: 750, */
        },
        tableContainer: {
            //height: tableHeight,// '73vh'
        },
        tablePagination: {
            //height: paginationHeight,// '8vh'
            minHeight: '50px',
            overflow: 'hidden',
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }));
};

const useStyledTableBody = makeStyles(theme => ({
    root: {
        "& tr td": {
            borderLeft: 'white thin solid',
            borderRight: 'white 2px solid',
        },
        "& tr:nth-child(odd)": {
            background: lighten(theme.palette.common.black, 0.90),
        },
        "& tr:hover": {
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                // lighten(theme.palette.common.black, 0.85)
            },
        },
    },
}));


export default function FilteredTable(props) {
    const { rows, showFilteringTableHead, showTableToolbar, header, paginationHeight, tableHeight, toolbarHeight } = props;
    //console.log('table props', { paginationHeight, tableHeight, toolbarHeight })
    const classes = useStyles({ paginationHeight, tableHeight })();
    const classesTableBody = useStyledTableBody();
    console.log(header);
    const [columnFilters, setColumnFilters] = React.useState(
        header.reduce(function (acc, column, i) {
            // transformar array em objeto, cujo cada propriedade do objeto é o nome da coluna
            // adiciona a propriedade currentMethod para controlar o filtro atual de cada coluna
            acc[column.columnName] = { ...column, currentMethod: filteringMethod.contains, input: '' };
            return acc;
        }, {}));

    console.log(columnFilters)



    const [dense, setDense] = React.useState(true);
    const [orderAscDesc, setOrderAscDesc] = React.useState('asc');
    const [orderByColumn, setOrderBy] = React.useState('empresa');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);
    const [selected, setSelected] = React.useState([]);

    const handleChangeFilterMethod = (column, newMethod) => {
        console.log(column, newMethod)
        setColumnFilters({ ...columnFilters, [column]: { ...columnFilters[column], currentMethod: newMethod } });
    }

    const handleChangeInputFilterMethod = (column, newValue) => {
        console.log(column, newValue)
        setColumnFilters({ ...columnFilters, [column]: { ...columnFilters[column], input: newValue } });
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderByColumn === property && orderAscDesc === 'asc';
        setOrderAscDesc(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const isSelected = id => selected.indexOf(id) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {
                    showTableToolbar && <EnhancedTableToolbar numSelected={selected.length} toolbarHeight={toolbarHeight} />
                }

                <TableContainer className={classes.tableContainer}>
                    <TableUI
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            headerCells={header}
                            numSelected={selected.length}
                            orderAscDesc={orderAscDesc}
                            orderByColumn={orderByColumn}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        {
                            showFilteringTableHead && (
                                <FilteringTableHead
                                    classes={''}
                                    handleChangeFilterMethod={handleChangeFilterMethod}
                                    handleChangeInputFilterMethod={handleChangeInputFilterMethod}
                                    headerCells={header}
                                    columnFilters={columnFilters}
                                />
                            )
                        }
                        <TableBody
                            classes={{ root: classesTableBody.root }}
                        >
                            {//getOrderedList(rows, orderAscDesc, orderByColumn)
                            rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index, array) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        createRow(row, isItemSelected, labelId, handleClick)
                                    );
                                })}
                            {/* createTableBodyFill(header, emptyRows, dense) */}{/* criar linhas vazias para preencher tabela */}
                        </TableBody>
                    </TableUI>
                </TableContainer>
                <TablePagination
                    className={classes.tablePagination}
                    labelRowsPerPage={"Linhas por página"}
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            {
                /**Controle para alternar altura das linhas da tabela 
                 *  <FormControlLabel
                 control={<Switch checked={dense} onChange={handleChangeDense} />}
                 label="Tabela enxuta"
             />
                 */
            }
        </div>
    );
}

FilteredTable.defaultProps = {
    paginationHeight: '8vh',
    showFilteringTableHead: true,
    tableHeight: '73vh',
    toolbarHeight: '9vh'
}

FilteredTable.propTypes = {
    header: PropTypes.array.isRequired,
    paginationHeight: PropTypes.string,
    rows: PropTypes.array.isRequired,
    showFilteringTableHead: PropTypes.bool,
    showTableToolbar: PropTypes.any,
    tableHeight: PropTypes.string,
    toolbarHeight: PropTypes.string,

}


const createTableBodyFill = (header, emptyRows, dense) => {
    return (
        emptyRows > 0 && (
            <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}> {/* renderiza espaço de quantas linhas faltam  */}
                <TableCell colSpan={header.length + 1} />
            </TableRow>
        )
    )
}

const createRow = (row, isItemSelected, labelId, onClickHandle) => {
    const rowKeys = Object.keys(row);
    return (
        <TableRow
            key={row.id}
            hover
            onClick={event => onClickHandle(event, row.id)}

        >
            <TableCell padding="checkbox">
                <Checkbox
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </TableCell>
            {
                rowKeys.map((key, index) => {
                    return (

                        <TableCell
                            key={`${index}${key}`}
                            scope="row"
                            padding="none"
                            align="center"
                        >
                            {row[key]}
                        </TableCell>

                    )
                })
            }
        </TableRow>
    )
}





// const createRows = (row) => {
//     const rowKeys = Object.keys(row);
//     return (
//         rowKeys.map((key, index) => {
//             return <TableCell key={`${index}${key}`} scope="row" align="center">  {row[key]} </TableCell>
//         })
//     )
// }
// 
// const createTableGrid = (data) => {
//     return data.map((row, index) => (
//         <TableRow key={`${index}${row.id}`}>
//             <TableCell role="checkbox" padding="checkbox">
//                 <Checkbox
//                     indeterminate={true}
//                     inputProps={{ 'aria-label': 'select all desserts' }}
//                 />
//             </TableCell>
//             {createRows(row)}
//         </TableRow>
//     ));
// }
// const Table = ({ data, header }) => {
// 
//     // size="small"
//     return (
//         <TableUI aria-label="a dense table">
//             <EnhancedTableHead headerCells={header} />
//             <TableBody>
//                 {createTableGrid(data)}
//             </TableBody>
//         </TableUI >
//     )
// }

// export default Table;
