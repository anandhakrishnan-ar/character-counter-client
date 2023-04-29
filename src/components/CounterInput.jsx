import { Box, Button, TextField } from "@mui/material";
import React,{ useState } from "react";

const CounterInput=({onGetCount})=>{
    const [characters,setCharacters]=useState('');
    const [error,setError]=useState(false);
    const onClick=()=>{
        characters && characters.length>0?
        onGetCount(characters):setError(true);
    }
    return (
        <Box sx={{display:'flex', justifyContent:'space-between'
        }}>
            <TextField inputProps={{ maxLength: 1000 }} value={characters} onChange={e=>{setError(false);setCharacters(e.currentTarget.value)}}  helperText={error?"This field is mandatory":""}/>
            <Box sx={{p:0}}><Button onClick={onClick} variant="contained" sx={{ml:2}} size="large">Get Count</Button></Box>
        </Box>
        
    )
}

export default CounterInput;