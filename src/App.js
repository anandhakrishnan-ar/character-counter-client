import './App.css';
import { Box, Typography } from '@mui/material';
import { CounterInput, ResultGrid } from './components';
import { useEffect, useState } from 'react';
import { API_LIST } from './utils/constants';

function App() {
  const[count,setCount]=useState();
  const[characters,setCharacters]=useState('');

 const getCharacterCount=()=>{
  fetch(`${API_LIST.GET_COUNTER}/?characters=${characters}`)
  .then((res) => res.json())
  .then((json) => {
    setCount(json);
  }) 
  .catch((error) => {
    alert(error);
  });     
 } 

 useEffect(()=>{
     if(characters && characters.length>0) 
        getCharacterCount();
  },[characters]);

 return ( 
    <Box className="App">
      <Typography variant='h3' sx={{p:2}}>Character Counter</Typography>
      <Box className="App-header">
        <Typography sx={{m:2,fontWeight:600}}>
          Enter a word or a sentence to find out number of occurance of a character
        </Typography>
        <CounterInput onGetCount={data=>{setCharacters(data)}}/>
        <Box sx={{p:2}}>
        {count && <ResultGrid characterCounts={count}/>}
         </Box>
      </Box>
    </Box>
  );
}

export default App;
