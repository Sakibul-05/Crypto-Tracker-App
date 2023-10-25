import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./styles.css"

const SelectDays = ({days, handleDaysChange})=> {
     
  return (
    <div className="selectDays-container">
        <p>Price Change in </p>
      <FormControl>
        <InputLabel id="demo-simple-select-label" sx={{color: "var(--white)"}}>Days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            height: "2.2rem",
            width: "min-content",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
          className= "days-selector" 
        >
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
          <MenuItem value={120}>120</MenuItem>
          <MenuItem value={365}>365</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectDays;