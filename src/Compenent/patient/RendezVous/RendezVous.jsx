import React, { useState } from 'react'
import 'react-calendar-datetime-picker/dist/index.css'
import 'react-calendar/dist/Calendar.css';
import DtPicker from 'react-calendar-datetime-picker'
import DatePicker from "react-datepicker";// import { TimeGrid } from 'react-big-calendar'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
  } from "@material-ui/pickers";
  
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  }));
const RendezVous = () => {
  const [date, setDate] = useState(null)
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const classes = useStyles();
  return(
    <>
  {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container >
        <Grid item>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Sélectionnez une date"
            value={selectedDate}
            onChange={date => setSelectedDate(date)}
            KeyboardButtonProps={{
              "aria-label": "changer la date"
            }}
          />
        </Grid>
        <Grid item>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Sélectionnez une heure"
            value={selectedTime}
            onChange={time => setSelectedTime(time)}
            KeyboardButtonProps={{
              "aria-label": "changer l'heure"
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
</>
  )
}
export default RendezVous