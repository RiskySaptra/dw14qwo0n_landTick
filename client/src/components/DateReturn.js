import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const DateReturn = data => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <>
      <DatePicker
        autoOk
        disabled={data.data}
        label="Return"
        inputVariant="outlined"
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

export default DateReturn;
