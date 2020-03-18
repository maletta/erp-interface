import React, {Fragment} from "react";
import IconsPalette from "../../molecules/IconsPalette";

const optionsList = [
    {option: 1, label: "Incluir"},{option: 2, label: "Alterar"},{option: 3, label: "Excluir"},
    {option: 4, label: "Baixar"},{option: 5, label: "Provisionar"},{option: 6, label: "Aprovar"},
    {option: 7, label: "Remessa"},{option: 8, label: "Retorno"},{option: 9, label: "Cancelar Remessa"},
    {option: 10, label: "Relatórios"}, 
];




const TestPage = () => (
    <Fragment>
        <IconsPalette options={optionsList}/>
    </Fragment>
);

export default TestPage;
