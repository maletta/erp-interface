import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SquaredIcon from "../atoms/SquaredIcon";
import { primary } from "../../settings/module01/colors";
import { shadow1 } from "../../settings/module01/animationsAndEffects";

const PalletIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: ${primary};
  overflow-x: auto;
  box-shadow: ${shadow1};
`;

const drawIconList = list =>
  list.map(({ option, label }) => (
    <SquaredIcon key={`${label}${option}`} label={label} option={option} />
  ));

const IconsPalette = ({ options }) => {
  return <PalletIconsContainer>{drawIconList(options)}</PalletIconsContainer>;
};

IconsPalette.propTypes = {
  options: PropTypes.array.isRequired
};

IconsPalette.defaultProps = {
  options: []
};

export default IconsPalette;
