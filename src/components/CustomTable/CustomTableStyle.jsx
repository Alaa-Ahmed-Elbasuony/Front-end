import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "styled-components";
import { TableContainer, TableRow } from "@mui/material";
import Table from "@mui/material/Table";

export const StyledTable = styled(Table)`
  & {
    max-width: auto !important;
    min-width: 50rem !important;
  }
`;
export const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    /* background-color: ${({ theme }) => theme.blueShade1};
    color: ${({ theme }) => theme.white}; */
    background-color: ${({ theme }) => theme.light_1};
    font-size: 1.5rem;
  }
  &.${tableCellClasses.body} {
    font-size: 1.5rem;
  }
`;

export const StyledTableRow = styled(TableRow)`
  & td,
  & th {
    padding: 1.5rem;
    border-bottom: 1px solid #00000039;
  }
`;

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 1rem !important;
`;
