// Third-party imports
import React from "react";
import { Button, makeStyles } from "@material-ui/core";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const PrimaryButton = ({ children, ...props }) => {
  // Hooks
  const classes = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={classes.root}
      {...props}
    >
      {children}
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default PrimaryButton;
