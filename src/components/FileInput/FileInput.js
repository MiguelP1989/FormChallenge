// Third-party imports
import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import CloudUpload from "@material-ui/icons/CloudUpload";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const FileInput = ({ control, name }) => {
  // Hooks
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => {
        console.log(value);
        return (
          <>
            <Dropzone onDrop={onChange}>
              {({ getRootProps, getInputProps }) => (
                <Paper
                  variant="outlined"
                  className={classes.root}
                  {...getRootProps()}
                >
                  <CloudUpload className={classes.icon} />
                  <input {...getInputProps()} name={name} onBlur={onBlur} />
                  <p>Drag and drop files here, or click to select files</p>
                </Paper>
              )}
            </Dropzone>
            <List>
              {value &&
                value.map((f, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <InsertDriveFile />
                      </ListItemIcon>
                      <ListItemText primary={f.name} secondary={f.size} />
                    </ListItem>
                  );
                })}
            </List>
          </>
        );
      }}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
  },
  icon: {
    marginTop: "16px",
    color: "#888888",
    fontSize: "42px",
  },
}));

export default FileInput;
