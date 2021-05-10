// Third-party imports
import React from "react";
import {
  Typography,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import { useData } from "../../Context/DataContext";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Result = () => {
  // Hooks
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");

  // variables
  const { files } = data;

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        📋 Form values
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};

export default Result;
