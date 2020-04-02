import React, { Fragment } from "react";
import IconsPalette from "../../molecules/IconsPalette";
import Tabs from "../../atoms/Tabs";
import TabPanel from "../../atoms/TabPanel";
import SimpleSidebar from "../../molecules/SimpleSidebar";
import Table, { createHeadersData } from "../../molecules/Table";
import BodyScrollHidden from "../../atoms/BodyScrollHidden";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import MainAppBar from "../../atoms/MainAppBar";
import TextField from "../../atoms/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { iconOptions } from "../../atoms/SquaredIcon";



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


const optionsList = [
    { option: 1, label: "Incluir" }, { option: 2, label: "Alterar" }, { option: 3, label: "Excluir" },
    { option: 4, label: "Baixar" }, { option: 5, label: "Provisionar" }, { option: 6, label: "Aprovar" },
    { option: 7, label: "Remessa" }, { option: 8, label: "Retorno" }, { option: 9, label: "Cancelar Remessa" },
    { option: 10, label: "Relatórios" },
];

const createTabsOptions = (tabs) => {
    return tabs.map((tab, index) => (
        {
            index, label: tab
        }
    ));
}

const mainTabsOptions = [
    { index: 0, label: "Consultar" }, { index: 1, label: "Alterar" }
];
const secondaryTabsOptions = [
    { index: 0, label: "Detalhes" }, { index: 1, label: "Impostos" }, { index: 2, label: "Rateios" }, { index: 3, label: "Baixas" }
];

const rateiosTabsOptions = [
    { index: 0, label: "Centro de Custo" }, { index: 1, label: "OS POSTO" }, { index: 2, label: "Serviço" }, { index: 3, label: "Funcionários" }
];

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


const createData = (id, empresa, titulo, parcela, nome, vencimento, vencimentoUtil,
    valorOriginal, saldo, baixa, listaDeBaixas, juros, impostos) => {
    return {
        id, empresa, titulo, parcela, nome, vencimento, vencimentoUtil,
        valorOriginal, saldo, baixa, listaDeBaixas, juros, impostos
    };
}

const data = [
    createData(1, '001/00', '111111', '2 de 10', 'Fornecedor A', '10/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(2, '001/00', '111111', '2 de 10', 'Fornecedor A', '11/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(3, '001/00', '222222', '2 de 10', 'Fornecedor A', '12/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(4, '001/00', '222222', '2 de 10', 'Fornecedor A', '13/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(5, '001/00', '222222', '2 de 10', 'Fornecedor A', '14/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(6, '001/00', '333333', '2 de 10', 'Fornecedor A', '15/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(7, '001/00', '333333', '2 de 10', 'Fornecedor A', '16/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(8, '001/00', '444444', '2 de 10', 'Fornecedor A', '17/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(9, '001/00', '444444', '2 de 10', 'Fornecedor A', '18/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(10, '001/00', '555555', '2 de 10', 'Fornecedor A', '19/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(11, '001/00', '555555', '2 de 10', 'Fornecedor A', '20/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(12, '001/00', '666666', '2 de 10', 'Fornecedor A', '21/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(13, '001/00', '666666', '2 de 10', 'Fornecedor A', '22/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(14, '001/00', '777777', '2 de 10', 'Fornecedor A', '23/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(15, '001/00', '777777', '2 de 10', 'Fornecedor A', '24/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
];

const createDataBaixas = (id, seq, dataDaBaixa, valor, porcentagem, cheque, conta) => {
    return {
        id, seq, dataDaBaixa, valor, porcentagem, cheque, conta
    };
}

const dataBaixas = [
    createDataBaixas(1, 1, '26/12/2019', '430,00', '25%', 'SEM CHEQUE', '341 0000001-5'),
    createDataBaixas(2, 2, '02/01/2020', '430,00', '25%', '88888', '341 0000001-5'),

]

const createDataRateios = (id, seq, centroDeCusto, valor, porcentagem) => {
    return {
        id, seq, centroDeCusto, valor, porcentagem,
    };
}

const dataRateios = [
    createDataRateios(1, 1, '26/12/2019', '430,00', '25%'),
    createDataRateios(2, 2, '02/01/2020', '430,00', '25%'),
]

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
    mainContent: {
        marginTop: theme.spacing(1),
        //backgroundColor: 'yellow',
    },
    sideBar: {
        marginTop: theme.spacing(1),
    },
    formRow: {
        height: '100%',
    },
    paddingLeft: {
        paddingLeft: theme.spacing(1),
    },
    background: {
        // backgroundColor: 'green',
        height: '100%',
    },
    marginTop: {
        marginTop: theme.spacing(2),
    }
}));


const TestPage = () => {
    const classes = useStyle();
    const [mainTab, setMainTab] = React.useState(0);
    const [secondaryTab, setSecondaryTab] = React.useState(0);
    const [rateiosTab, setRateiosTab] = React.useState(0);
    const handlePrimaryTabAttach = () => { };
    const handleSecondaryTabAttach = () => { };

    return (
        <BodyScrollHidden>
            <MainAppBar />
            <Paper className={classes.root}>
                <Typography variant="h5">Contas a pagar</Typography>
            </Paper>
            {/* Tab principal */}
            <Grid container spacing={1} className={classes.background}>
                {/* Grid  conteúdo principal*/}
                <Grid item xs={9} sm={9} className={classes.mainContent}>
                    <Tabs tabsOptions={mainTabsOptions} currentValue={mainTab} handleClick={(props) => setMainTab(props)} />
                    {/* Primeira TabPanel principal  */}
                    <TabPanel index={mainTabsOptions[0].index} currentValue={mainTab} >
                        <Grid item xs={12} sm={12} >
                            <IconsPalette options={optionsList} />
                            <Table rows={data} header={createHeadersData(data)} paginationHeight={'8vh'} tableHeight={'73vh'} toolbarHeight={'9vh'} />

                        </Grid>
                    </TabPanel>
                    {/* Segunda TabPanel principal  */}
                    <TabPanel index={mainTabsOptions[1].index} currentValue={mainTab} title={'ALTERAÇÃO DO TÍTULO 123456 - DESIS'}
                        handleAttach={handlePrimaryTabAttach} handleCancel={handlePrimaryTabAttach} handleDelete={handlePrimaryTabAttach} handleSave={handlePrimaryTabAttach}>
                        {/* Grid container para espaçamento */}
                        <Grid container spacing={2} className={classes.paddingLeft}>
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
                                            helperText=" "
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container item xs={1} sm={1}>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Parcela"
                                            defaultValue="01/12"
                                            helperText=" "
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
                                            helperText=" "
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
                                            helperText=" "
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
                                            helperText=" "
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
                                            helperText=" "
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
                                            helperText=" "
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
                                {/* Container largura do TabPanel tem que ser igual a largura do formulário */}
                                <Grid container item xs={11} sm={11}>
                                    {/* Tab secundária */}
                                    <Tabs tabsOptions={secondaryTabsOptions} currentValue={secondaryTab} handleClick={(props) => setSecondaryTab(props)} variant="secondLevel" />
                                    {/* Primeira TabPanel secundária  */}
                                    <TabPanel index={secondaryTabsOptions[0].index} currentValue={secondaryTab}>
                                        {/* Grid container conteúdo do TabPanel  */}
                                        <Grid container item xs={12} sm={12} spacing={0} className={classes.marginTop}>
                                            {/* Grid container linha do formulário */}
                                            <Grid container spacing={1} >
                                                {/* Grid largura do input */}
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="date"
                                                        label="Emissão"
                                                        type="date"
                                                        defaultValue="2020-01-01"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="date"
                                                        label="Emissão Contábil"
                                                        type="date"
                                                        defaultValue="2020-01-01"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="date"
                                                        label="Origem"
                                                        type="text"
                                                        defaultValue="NF Compra"
                                                        fullWidth
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="date"
                                                        label="Documento origem"
                                                        type="text"
                                                        defaultValue="123456"
                                                        fullWidth
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                            </Grid>
                                            {/* Grid container linha do formulário */}
                                            <Grid container spacing={1} >
                                                {/* Grid largura do input */}
                                                <Grid item xs={12} sm={12}>
                                                    <TextField
                                                        id="date"
                                                        label="Descrição"
                                                        defaultValue="Customização"
                                                        helperText=" "
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                            {/* Grid container linha do formulário */}
                                            <Grid container spacing={1} >
                                                {/* Grid largura do input */}
                                                <Grid item xs={12} sm={12}>
                                                    <TextField
                                                        id="date"
                                                        label="Observação"
                                                        type="textarea"
                                                        defaultValue="Pedir para colocar como DDA"
                                                        helperText=" "

                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </TabPanel>

                                    {/* Segunda TabPanel secundária  */}
                                    <TabPanel index={secondaryTabsOptions[1].index} currentValue={secondaryTab}>
                                        <Grid container item xs={12} sm={12} spacing={0} className={classes.marginTop}>
                                            {/* Grid container linha do formulário */}
                                            <Grid container spacing={1} >
                                                {/* Grid largura do input */}
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="PIS"
                                                        defaultValue="0,00"
                                                        fullWidth
                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="IR"
                                                        defaultValue="0,00"
                                                        fullWidth

                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="date"
                                                        label="Competência"
                                                        type="date"
                                                        defaultValue="2020-03-30"
                                                        fullWidth
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Arrecadação"
                                                        // value={currency}
                                                        // onChange={handleChange}
                                                        helperText=" "
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
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="% de Arrecadação"
                                                        type="text"
                                                        defaultValue="0%"
                                                        fullWidth
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                            </Grid>
                                            {/* Grid container linha do formulário */}
                                            <Grid container spacing={1} >
                                                {/* Grid largura do input */}
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="text"
                                                        label="COFINS"
                                                        defaultValue="0,00"
                                                        fullWidth
                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="ISS"
                                                        defaultValue="0,00"
                                                        fullWidth

                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Tipo de Contribuinte"
                                                        // value={currency}
                                                        // onChange={handleChange}
                                                        helperText=" "
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
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Cód Recolhimento"
                                                        // value={currency}
                                                        // onChange={handleChange}
                                                        helperText=" "
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
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="Juros"
                                                        type="text"
                                                        defaultValue="0,00"
                                                        fullWidth
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                            </Grid>

                                            {/* Grid container linha do formulário */}
                                            <Grid container spacing={1} >
                                                {/* Grid largura do input */}
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="text"
                                                        label="CSLL"
                                                        defaultValue="0,00"
                                                        fullWidth
                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="INSS"
                                                        defaultValue="0,00"
                                                        fullWidth
                                                        helperText=" "
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        label="Contribuinte"
                                                        defaultValue="0,00"
                                                        helperText=" "
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        label="Valor arrecadação"
                                                        defaultValue="0,00"
                                                        helperText=" "
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        id="date"
                                                        label="Multa"
                                                        type="text"
                                                        defaultValue="0,00"
                                                        fullWidth
                                                        helperText=" "
                                                        disabled
                                                    />
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </TabPanel>

                                    {/* Terceira TabPanel secundária  */}
                                    <TabPanel index={secondaryTabsOptions[2].index} currentValue={secondaryTab}>
                                        {/* Grid conteúdo TabPanel */}
                                        <Grid container item xs={12} sm={12} spacing={0} className={classes.marginTop}>
                                            <Tabs tabsOptions={rateiosTabsOptions} currentValue={rateiosTab} handleClick={(props) => setRateiosTab(props)} variant="thirdLevel" />
                                            <TabPanel index={rateiosTabsOptions[0].index} currentValue={rateiosTab} handleDelete={() => { }} handleSave={() => { }}>
                                                <Table rows={dataBaixas} header={createHeadersData(dataBaixas)} paginationHeight={'8vh'} tableHeight={'73vh'} toolbarHeight={'9vh'} />
                                            </TabPanel>
                                        </Grid>



                                    </TabPanel>
                                    <TabPanel index={secondaryTabsOptions[3].index} currentValue={secondaryTab}
                                        handleDelete={handleSecondaryTabAttach} handleSave={handleSecondaryTabAttach}>
                                        <Grid item xs={12} sm={12} >
                                            <Table rows={dataBaixas} header={createHeadersData(dataBaixas)} paginationHeight={'8vh'} tableHeight={'73vh'} toolbarHeight={'9vh'} />
                                        </Grid>
                                    </TabPanel>
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



        </BodyScrollHidden>
    );
};

export default TestPage;
