import React, { Fragment } from "react";
import IconsPalette from "../../components/molecules/IconsPalette";
import SimpleSidebar from "../../components/molecules/SimpleSidebar";
import Table, { createHeadersData } from "../../components/molecules/Table";
import BodyScrollHidden from "../../components/atoms/BodyScrollHidden";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import MainAppBar from "../atoms/MainAppBar";


const optionsList = [
    { option: 1, label: "Incluir" }, { option: 2, label: "Alterar" }, { option: 3, label: "Excluir" },
    { option: 4, label: "Baixar" }, { option: 5, label: "Provisionar" }, { option: 6, label: "Aprovar" },
    { option: 7, label: "Remessa" }, { option: 8, label: "Retorno" }, { option: 9, label: "Cancelar Remessa" },
    { option: 10, label: "Relatórios" },
];

const createData = (id, empresa, titulo, parcela, nome, vencimento, vencimentoUtil,
    valorOriginal, saldo, baixa, listaDeBaixas, juros, impostos) => {
    return {
        id, empresa, titulo, parcela, nome, vencimento, vencimentoUtil,
        valorOriginal, saldo, baixa, listaDeBaixas, juros, impostos
    };
}

const data = [
    createData(1, '001/00', '126355', '2 de 10', 'Fornecedor A', '10/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(2, '001/00', '126355', '2 de 10', 'Fornecedor A', '11/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(3, '001/00', '126355', '2 de 10', 'Fornecedor A', '12/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(4, '001/00', '126355', '2 de 10', 'Fornecedor A', '13/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(5, '001/00', '126355', '2 de 10', 'Fornecedor A', '14/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(6, '001/00', '126355', '2 de 10', 'Fornecedor A', '15/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(7, '001/00', '126355', '2 de 10', 'Fornecedor A', '16/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(8, '001/00', '126355', '2 de 10', 'Fornecedor A', '17/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(9, '001/00', '126355', '2 de 10', 'Fornecedor A', '18/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(10, '001/00', '126355', '2 de 10', 'Fornecedor A', '19/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(11, '001/00', '126355', '2 de 10', 'Fornecedor A', '20/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(12, '001/00', '126355', '2 de 10', 'Fornecedor A', '21/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(13, '001/00', '126355', '2 de 10', 'Fornecedor A', '22/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(14, '001/00', '126355', '2 de 10', 'Fornecedor A', '23/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
    createData(15, '001/00', '126355', '2 de 10', 'Fornecedor A', '24/08/2020', '20/08/2020', '1000,00', '0,00', '1000.00', <VisibilityIcon />, '0,00', '0,00'),
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
    }
}));

const ContasApagarAlteracao = () => {

    const classes = useStyle();
    return (
        <BodyScrollHidden>
            <MainAppBar />
            <Paper className={classes.root}>
                <Typography variant="h5">Contas a pagar</Typography>
            </Paper>
            <Grid container spacing={1} >
                <Grid item xs={9} sm={9} >

                </Grid>
                <Grid container item xs={3} sm={3} className={classes.sideBar} alignContent="flex-start">
                    <SimpleSidebar simpleCard={simpleCard} balanceCard={balanceCard} />
                </Grid>
            </Grid>
        </BodyScrollHidden>
    );
}

export default ContasApagarAlteracao;