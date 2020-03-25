import React from "react";
import SimpleCard from "../../atoms/SimpleCard";
import TestCard from "../../atoms/Test.Card";
import BalanceCard from "../../atoms/BalanceCard";
import Bb from "../../../assets/bb.png";
import Bradesco from "../../../assets/bradesco.png";
import Itau from "../../../assets/itau.png";
import { makeStyles } from "@material-ui/core/styles";


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
        icon: () => Bradesco,
        isPositive: true,
    },
    {
        description: '341 - 888 88888-8',
        content: 'R$ 35.008,63',
        icon: () => Itau,
        isPositive: true,
    },
    {
        description: '001 - 888 88888-8',
        content: 'R$ -3.052,89',
        icon: () => Bb,
        isPositive: false,
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

const CardPage = () => {
    const c = useStyles();
    return (
        <div className={c.root}>
            <TestCard />
            {balanceCard.map((card, index) => <BalanceCard key={`${index}`} {...card} />)}
            {simpleCard.map((card, index) => <SimpleCard key={`${index}${card.content}`} {...card} />)}
        </div>
    );

}



export default CardPage;