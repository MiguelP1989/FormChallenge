// Third-party imports
import React, { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import {
  Button,
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
import { useData } from "../../Context/DataContext";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const FileInput = ({ control, name }) => {
  // Hooks
  const classes = useStyles();
  const [file, setFile] = useState();

  const onHandleDelete = useCallback(
    (fileNameSelected) => {
      const newFiles = [...file];
      const updateFiles = newFiles.filter((f) => f.name !== fileNameSelected);
      setFile(updateFiles);
    },
    [file, setFile]
  );

  console.log("hello");
  console.log(file);
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => {
        // console.log(value);
        setFile(value);
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
              {file &&
                file.map((f, index) => (
                  <>
                    <ListItem key={index}>
                      <ListItemIcon>
                        <InsertDriveFile />
                      </ListItemIcon>
                      <ListItemText primary={f.name} secondary={f.size} />
                      {file && (
                        <Button
                          color="secondary"
                          onClick={() => onHandleDelete(f.name)}
                        >
                          Delete
                        </Button>
                      )}
                    </ListItem>
                  </>
                ))}
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
