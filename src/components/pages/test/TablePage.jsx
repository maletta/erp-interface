import React, { Fragment } from "react";
import Table, {createHeadersData} from "../../molecules/Table";
import VisibilityIcon from '@material-ui/icons/Visibility';

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


const TablePage = () => {
    console.log('data - ', data);
    return (
        <Fragment>
            <Table rows={data} header={createHeadersData(data)} />
        </Fragment>
    )
}

export default TablePage;