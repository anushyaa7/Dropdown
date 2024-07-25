import { Autocomplete, Checkbox, TextField } from "@mui/material";
import React from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./Dropdown.css"

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Dropdown() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        );
      }}
      className="dropdown-container"
      renderInput={(params) => (
        <TextField {...params} 
        placeholder="Placeholder"
        className="custom-textfield"  
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