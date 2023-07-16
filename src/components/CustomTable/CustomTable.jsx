import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableContainer,
  StyledTable,
} from "./CustomTableStyle";

function createData(name, calories, fat, carbs) {
  return [name, calories, fat, carbs];
}

export default function CustomTables({ tabledata }) {
  const columns = tabledata.columns;
  const rows = tabledata.rows;
  console.log(tabledata);
  return (
    <StyledTableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 700 }} aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <StyledTableCell align="left" key={i}>
                {column}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              {columns.map((_, j) => (
                <StyledTableCell align="left" key={j}>
                  {row[j]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}
