import React from "react";
import { TableCell, TableContainer, TableHeader, TableRow } from "./TableStyle";

function Table() {
  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeader>Profile</TableHeader>
          <TableHeader>Service</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Time</TableHeader>
          <TableHeader>Action</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>DR.</TableCell>
          <TableCell>Spicialist</TableCell>
          <TableCell>mm/dd/yyyy</TableCell>
          <TableCell>Hh:Mm</TableCell>
          <TableCell>cancel?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>DR.</TableCell>
          <TableCell>Spicialist</TableCell>
          <TableCell>mm/dd/yyyy</TableCell>
          <TableCell>Hh:Mm</TableCell>
          <TableCell>cancel?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>DR.</TableCell>
          <TableCell>Spicialist</TableCell>
          <TableCell>mm/dd/yyyy</TableCell>
          <TableCell>Hh:Mm</TableCell>
          <TableCell>cancel?</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>DR.</TableCell>
          <TableCell>Spicialist</TableCell>
          <TableCell>mm/dd/yyyy</TableCell>
          <TableCell>Hh:Mm</TableCell>
          <TableCell>cancel?</TableCell>
        </TableRow>
      </tbody>
    </TableContainer>
  );
}

export default Table;
