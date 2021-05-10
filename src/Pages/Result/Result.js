// Third-party imports
import React from "react";
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import Form from "../../components/Form/Form";
import FileInput from "../../components/FileInput/FileInput";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useData } from "../../Context/DataContext";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Result = () => {
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
        </Table>
      </TableContainer>
    </MainContainer>
  );
};

export default Result;
