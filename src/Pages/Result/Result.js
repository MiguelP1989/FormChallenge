// Third-party imports
import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

// Global imports
import MainContainer from "../../components/MainContainer/MainContainer";
import { useData } from "../../Context/DataContext";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Result = () => {
  // Hooks
  const classes = useStyles();
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => {
    return entry[0] !== "files" && entry[1] !== undefined;
  });

  // variables
  const { files } = data;

  const handleSubmit = async () => {
    const formData = [];

    if (data.files) {
      data.files.forEach((file) => {
        formData.push({ file: file });
      });
    }

    entries.forEach((entry) => {
      formData.push({ entry: entry[0], value: entry[1] });
    });
    console.log("formData", formData);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        📋 Form values
      </Typography>
      <TableContainer className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Field</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <List>
        {files &&
          files.map((f, index) => (
            <>
              {index === 0 && (
                <Typography component="h2" variant="h5" align="center">
                  📦 Files
                </Typography>
              )}

              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            </>
          ))}
      </List>
      <PrimaryButton disableRipple onClick={handleSubmit}>
        Submit
      </PrimaryButton>
      <Link className={classes.link} to="/">
        Start Over
      </Link>
    </MainContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default Result;
