import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";

const ResultGrid=({characterCounts})=>{
    return(
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Character</TableCell>
          <TableCell align="right">Counter</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(characterCounts).map((key) => (
          <TableRow
            key={key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {key}
            </TableCell>
            <TableCell align="right">{characterCounts[key]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
}
export default ResultGrid;