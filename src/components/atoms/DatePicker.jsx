import moment from "moment";
import MomentUtils from "@date-io/moment";
import React from "react";
import {MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { mountInputStyles, useStylesLabel } from "../atoms/TextField";
import "moment/locale/pt-br";

const DatePicker = ({ color, ...props }) => {

  // '2014-08-18T00:00:00'

  const inputClasses = makeStyles(theme => mountInputStyles(theme, color, props.variant))();
  const labelClasses = useStylesLabel();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={"pt-br"}>
      <KeyboardDatePicker
        InputProps={{ classes: inputClasses }}
        InputLabelProps={{ classes: labelClasses }}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;