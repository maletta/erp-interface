import React from "react";
import TestCard from "../../atoms/Test.Card";
import SimpleSidebar from "../../molecules/SimpleSidebar";


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

const CardPage = () => {
    return (
        <div>
            <TestCard />
            <SimpleSidebar simpleCard={simpleCard} balanceCard={balanceCard}/>
        </div>
    );

}



export default CardPage;