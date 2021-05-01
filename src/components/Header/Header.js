// Third-party imports
import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Header = () => {
  // Hooks
  const classes = useStyles();

  return (
    <Typography className={classes.root} component="h1">
      The ultimate Form Challenge
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "40px",
    color: "deepink",
    textShadow: "1px 1px darkmangenta",
  },
}));

export default Header;
