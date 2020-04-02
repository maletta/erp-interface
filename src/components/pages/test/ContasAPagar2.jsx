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
import TitleBar from "../../atoms/TitleBar";
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
        // backgroundColor: 'green',
        height: 'calc(100% - 11vh)', //100% da página subtraindo  altura de TitleBar e MainAppBar
        maxHeight: 'calc(100% - 11vh)',  //100% da página subtraindo  altura de TitleBar e MainAppBar
        // maxHeight: '90vh',
    },
    mainContent: {
        marginTop: theme.spacing(1),
        backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'column',
        // overflowY: 'auto',
        maxHeight: '100%',
    },
    sideBar: {
        marginTop: theme.spacing(1),
        overflowY: 'auto',
    },
    formRow: {
        height: '100%',
    },
    paddingLeft: {
        paddingLeft: theme.spacing(1),
    },
    marginTop: {
        marginTop: theme.spacing(2),
    },
    test: {
        background: 'black',
        height: '300px',
    }
}));


const ContasAPagarAlteracao = () => {
    const classes = useStyle();
    const [mainTab, setMainTab] = React.useState(1);
    const [secondaryTab, setSecondaryTab] = React.useState(0);
    const [rateiosTab, setRateiosTab] = React.useState(0);
    const handlePrimaryTabAttach = () => { };
    const handleSecondaryTabAttach = () => { };

    return (
        <BodyScrollHidden>
            <MainAppBar height={'6vh'} />
            <TitleBar label={'Contas a pagar'} height={'5vh'} />
            {/* Tab principal */}
            <Grid container spacing={1} className={classes.root}>
                {/* Grid  conteúdo principal*/}
                <Grid item xs={9} sm={9} className={classes.mainContent}>
                    <Tabs tabsOptions={mainTabsOptions} currentValue={mainTab} handleClick={(props) => setMainTab(props)} />

                    {/** Primeira TabPabel Principal */}
                    {/* Primeira TabPanel principal  */}
                    <TabPanel index={mainTabsOptions[0].index} currentValue={0} >
                        <IconsPalette options={optionsList} />
                        <Table rows={data} header={createHeadersData(data)} paginationHeight={'8vh'} tableHeight={'73vh'} toolbarHeight={'9vh'} />
                    </TabPanel>
                    {/** Segunda TabPabel Principal */}
                    <TabPanel index={mainTabsOptions[1].index} currentValue={0} title={'ALTERAÇÃO DO TÍTULO 123456 - DESIS'}>
                    teste
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

export default ContasAPagarAlteracao;
