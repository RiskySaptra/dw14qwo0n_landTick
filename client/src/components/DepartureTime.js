import React, { useState } from "react";
import { TimePicker } from "@material-ui/pickers";

const DepartureTime = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <TimePicker
        autoOk
        margin="dense"
        inputVariant="outlined"
        label="Arrival Time"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </>
  );
};

export default DepartureTime;
