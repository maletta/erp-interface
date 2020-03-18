import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { shadow1 } from "../../settings/module01/animationsAndEffects";
import { white } from "../../settings/module01/colors";


export const iconOptions = option => {
  switch (option) {
    case 1:
      return <NoteAddIcon />; 
    case 2:
      return <EditOutlinedIcon />;
    case 3:
      return <DeleteForeverIcon />;
    case 4:
      return <LocalAtmIcon />;
    case 5:
      return <EventNoteIcon />;
    case 6:
      return <CheckCircleIcon />;
    case 7:
      return <ArrowUpwardIcon />;
    case 8:
      return <RotateLeftIcon />;
    case 9:
      return <RestoreFromTrashIcon />;
    case 10:
      return <EqualizerIcon />;
    default:
      return <NoteAddIcon />;
  }
};

const SquaredIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  min-width: 90px;
  color: ${white};
  cursor: pointer;
  font-size: 0.7em;
  &:hover{
    box-shadow: ${shadow1};
  }
`;

// &:first-child{
//     color: black;
// }

/* caso seja um label composto */
const drawCompoundLabel = label =>
  label.split(" ").map(item => <span>{item}</span>);

const SquaredIcon = ({ option, label }) => (
  <SquaredIconContainer>
    {iconOptions(option)}
    {drawCompoundLabel(label)}
  </SquaredIconContainer>
);

SquaredIcon.propTypes = {
  option: PropTypes.number,
  label: PropTypes.string
};

SquaredIcon.defaultProps = {
  option: 1,
  label: ""
};

export default SquaredIcon;
