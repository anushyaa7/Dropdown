import { Autocomplete, Checkbox, TextField } from "@mui/material";
import React from "react";
import "./Dropdown.css"
import Checked from "./assets/Checked.png"


export default function Dropdown() {
  return (
    <Autocomplete
      multiple
      id="tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps} className="option-item">
            <div className="icon-placeholder">
              {selected && <img src={Checked} alt="checked" className="checked-icon" />}
            </div>
            <span className="option-text">{option.title}</span>
          </li>
        );
      }}
      className="dropdown-container"
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          className="custom-textfield"
          variant="outlined"
         
        />
      )}
      classes={{
        paper: "dropdown-paper",
      }}
    />
  );
}

const top100Films = [
    { title: 'Inception', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Reign', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
];