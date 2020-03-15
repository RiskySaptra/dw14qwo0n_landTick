import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const DateDepartureAdmin = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <DatePicker
        autoOk
        inputVariant="outlined"
        label="Arrival Date"
        margin="dense"
        format="MM/dd/yyyy"
        variant="inline"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        fullWidth
      />
    </>
  );
};

export default DateDepartureAdmin;
