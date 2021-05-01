// Third-party imports
import React from "react";
import { Container, makeStyles } from "@material-ui/core";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Form = ({ children, ...props }) => {
  // Hooks
  const classes = useStyles();
  return (
    <form className={classes.root} noValidade {...props}>
      {children}
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

export default Form;
