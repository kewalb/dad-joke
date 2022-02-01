import React from "react";
import { makeStyles, Box, Paper, Typography } from "@material-ui/core";
import Joke from "./Joke";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    width: "80%",
    height: "80%",
  },
  sidebar: {
    backgroundColor: "#9575cd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "35%",
    textAlign: "center",
    zIndex: 2
  },
  title: {
    fontSize: "3rem",
    color: "white",
    fontWeight: 700,
    margin: 50,
    letterSpacing: 0,
  },
  image:{
      width: "50%",
      boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)"
  },
  listJokes:{
      height: "90%",
      width: "70%",
      alignSelf: "center",
      backgroundColor: "white",
      overflow: "scroll"
  }
}));

function List() {
  const classes = useStyles();
  return (
    <Box className={classes.list}>
      <Paper className={classes.sidebar} elevation={5}>
        <Typography className={classes.title}>Welcome to Dad Jokes</Typography>
        <img src="https://cdn3.iconfinder.com/data/icons/emojis-set-1/512/13.png" className={classes.image} />
      </Paper>
      <Paper className={classes.listJokes} elevation={4}>
            <Joke />
      </Paper>
    </Box>
  );
}

export default List;
