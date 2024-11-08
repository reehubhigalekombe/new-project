import React, {useState} from 'react'
import {TextField, InputAdornment} from "@mui/material";
import  SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
    const [query, setQuery] =useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value);

    }

  return (
   <TextField
   variant='outlined'
   value={query}
   placeholder='Search.....'
   onChange={handleInputChange}
   InputProps={{
    startAdornment: (
        <InputAdornment position="start">
        <SearchIcon/>
        </InputAdornment>
    ),
   }}
   sx={{
    width: "250px",
    backgroundColor: "silver",
    color: "white"

   }}
   />
    
  )
}

export default SearchBar
