import React, { Fragment } from "react";
import IconsPalette from "../molecules/IconsPalette";
import Tabs from "../atoms/Tabs";
import TabPanel from "../atoms/TabPanel";
import SimpleSidebar from "../molecules/SimpleSidebar";
import Table, { createHeadersData } from "../molecules/Table";
import BodyScrollHidden from "../atoms/BodyScrollHidden";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import MainAppBar from "../atoms/MainAppBar";
import TextField from "../atoms/TextField";
import MenuItem from "@material-ui/core/MenuItem";


const optionsList = [
    { option: 1, label: "Incluir" }, { option: 2, label: "Alterar" }, { option: 3, label: "Excluir" },
    { option: 4, label: "Baixar" }, { option: 5, label: "Provisionar" }, { option: 6, label: "Aprovar" },
    { option: 7, label: "Remessa" }, { option: 8, label: "Retorno" }, { option: 9, label: "Cancelar Remessa" },
    { option: 10, label: "Relatórios" },
];

const mainTabsOptions = [
    { index: 0, label: "Consultar" }, { index: 1, label: "Alterar" }
];

const useStyle = makeStyles(theme => ({
    root: {
        borderRadius: '0px 0px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        height: '7vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 8px 0px 8px',
        boxShadow: theme.shadows[1],
    },
    sideBar: {
        marginTop: theme.spacing(1),
    },
    formRow: {
        height: '100%',
    }
}));


const secondaryTabsOptions = [];
const currencies = [
    {
        value: '01',
        label: '257 - 000001-5',
    },
    {
        value: '02',
        label: '341 - 000002-6',
    },
    {
        value: '03',
        label: '001 - 000003-7',
    },
    {
        value: '04',
        label: '104 - 000004-8',
    },
];


const balanceCard = [
    {
        header: 'Saldo total em bancos:',
        main: {
            content: '194.965,24',
            description: 'R$',
            isPositive: true,

        },
        footer: {
            realized: {
                content: '193.905,61',
                description: 'Realizado R$',
            },
            total: {
                content: '200.000,00',
                description: 'Limite total R$',
            },
        }
    }
];

const simpleCard = [
    {
        description: '257 - 888 88888-8',
        content: 'R$ 163.009,50',
        icon: 1,
        isPositive: true,
    },
    {
        description: '341 - 888 88888-8',
        content: 'R$ 35.008,63',
        icon: 2,
        isPositive: true,
    },
    {
        description: '001 - 888 88888-8',
        content: 'R$ -3.052,89',
        icon: 0,
        isPositive: false,
    },
];

const TestPage = () => {
    const [mainTab, setMainTab] = React.useState(1);
    const classes = useStyle();

    return (
        <BodyScrollHidden>
            <MainAppBar />
            <Paper className={classes.root}>
                <Typography variant="h5">Contas a pagar</Typography>
            </Paper>
            {/* Tab principal */}
            <Grid container spacing={1} >
                {/* Grid  conteúdo principal*/}
                <Grid item xs={9} sm={9} className={classes.sideBar}>
                    <Tabs tabsOptions={mainTabsOptions} currentValue={mainTab} handleClick={(props) => setMainTab(props)} />
                    {/* Primeira TabPanel principal  */}
                    <TabPanel index={mainTabsOptions[0].index} currentValue={mainTab}>
                        Consultar
                    </TabPanel>
                    {/* Segunda TabPanel principal  */}
                    <TabPanel index={mainTabsOptions[1].index} currentValue={mainTab}>
                        {/* Grid container para espaçamento */}
                        <Grid container spacing={2} >
                            {/* Grid container conteúdo da esquerda  */}
                            <Grid container item xs={10} sm={10} spacing={1} className={classes.formRow}>
                                {/* Grid container linha do formulário */}
                                <Grid container spacing={1} >
                                    {/* Grid container largura do input */}
                                    <Grid container item xs={2} sm={2}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Título"
                                            defaultValue="123213123"
                                            helperText="error"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={1} sm={1}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Parcela"
                                            defaultValue="01/12"
                                            helperText="error"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={3} sm={3}>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Conta"
                                            // value={currency}
                                            // onChange={handleChange}
                                            helperText="selecione a conta"
                                            variant="outlined"
                                            fullWidth
                                        >
                                            {currencies.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid container item xs={2} sm={2}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Situação"
                                            defaultValue="123213123"
                                            helperText="error"
                                            variant="outlined"
                                            color="success"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={3} sm={3}>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Tipo"
                                            // value={currency}
                                            // onChange={handleChange}
                                            helperText="selecione o tipo"
                                            variant="outlined"
                                            fullWidth
                                        >
                                            {currencies.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                                {/* Grid container linha do formulário */}
                                <Grid container spacing={1} >
                                    {/* Grid container largura do input */}
                                    <Grid container item xs={6} sm={6}>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Fornecedor"
                                            // value={currency}
                                            // onChange={handleChange}
                                            helperText="Fornecedor"
                                            variant="outlined"
                                            fullWidth
                                        >
                                            {currencies.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid container item xs={5} sm={5}>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Categoria"
                                            // value={currency}
                                            // onChange={handleChange}
                                            helperText="Fornecedor"
                                            variant="outlined"
                                            fullWidth
                                        >
                                            {currencies.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* Grid container conteúdo da direta [coluna de input]  */}
                            <Grid container item xs={2} sm={2} spacing={1} className={classes.formRow}>
                                {/* Grid container linha do formulário */}
                                <Grid container spacing={1}>
                                    {/* Grid container largura do input */}
                                    <Grid item container xs={12} sm={12}>
                                        <TextField
                                            id="date"
                                            label="Vencimento"
                                            type="date"
                                            defaultValue="2020-01-01"
                                            className={classes.textField}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="date"
                                            label="Vencimento Útil"
                                            type="date"
                                            defaultValue="2020-01-02"
                                            className={classes.textField}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Valor Original"
                                            defaultValue="1500,00"
                                            helperText=""
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Valor Impostos"
                                            defaultValue="270,00"
                                            helperText=""
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Valor Desconto"
                                            defaultValue="50,00"
                                            helperText=""
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Valor Abatimento"
                                            defaultValue="0,00"
                                            helperText=""
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Valor Pago"
                                            defaultValue="0,00"
                                            helperText=""
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={12} sm={12}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Valor Saldo"
                                            defaultValue="1720,00"
                                            helperText=""
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Grid>
                {/* Grid barra lateral direita */}
                <Grid container item xs={3} sm={3} className={classes.sideBar} alignContent="flex-start">
                    <SimpleSidebar simpleCard={simpleCard} balanceCard={balanceCard} />
                </Grid>
            </Grid>

            {/* Tab secundária */}
           
        </BodyScrollHidden>
    );
};

export default TestPage;
