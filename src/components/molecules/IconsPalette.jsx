import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SquaredIcon from "../atoms/SquaredIcon";
// import { primary } from "../../settings/module01/colors";
// import { shadow1 } from "../../settings/module01/animationsAndEffects";
import { useTheme } from "@material-ui/core/styles";

const PalletIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: ${(props) => props.customStyles.background };
  overflow-x: auto;
  box-shadow: ${(props) => props.customStyles.shadow[1] };
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
  scrollbar-width: thin;
  scrollbar-color: #fff rgba(0,0,0,0.3);
  &::-webkit-scrollbar {
    background: rgba(0,0,0,0.3); // #fafafa
    width: 12px;
    height: 8px;
  }
 
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset ${props => props.customStyles.shadow[0]}; 
    /* border-radius: 10px; */
  }
  
  &::-webkit-scrollbar-thumb {
    background: #fff; //  #1e272e
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3); 
  }
`;

const drawIconList = list =>
  list.map(({ option, label }) => (
    <SquaredIcon key={`${label}${option}`} label={label} option={option} />
  ));

const IconsPalette = ({ options }) => {
  const theme = useTheme();
  console.log(theme);
  const customStyles = {
    background: theme.palette.primary.main,
    shadow: [theme.shadows[1],theme.shadows[2]],
  }; 
  return <PalletIconsContainer customStyles={customStyles}>{drawIconList(options)}</PalletIconsContainer>;
};

IconsPalette.propTypes = {
  options: PropTypes.array.isRequired
};

IconsPalette.defaultProps = {
  options: []
};

export default IconsPalette;
