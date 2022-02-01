import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import {
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpAlt,
  ThumbUpAltTwoTone,
  ThumbUpOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  joke: {
    display: "flex",
    borderBottom: "2px solid black",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 400,
  },
  btn: {
    display: "flex",
    marginRight: "1rem",
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
  },
  likeBtn: {
    fontSize: "2rem",
    margin: 20,
    cursor: "pointer",
  },
  votes: {
    fontSize: 20,
  },
  joke: {
    width: "150%",
    fontSize: "1.2rem",
  },
  emoji: {
    fontSize: "3rem",
    marginLeft: "auto",
    borderRadius: "50%",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
  },
}));

function Joke() {
  const classes = useStyles();
  return (
    <Box className={classes.joke}>
      <Box className={classes.btn}>
        <ThumbUpOutlined style={{ color: "red" }} className={classes.likeBtn} />
        <Typography className={classes.votes}>0</Typography>
        <ThumbDownOutlined className={classes.likeBtn} />
      </Box>
      {/* <Box className={classes.joke}>{text}</Box>
      <Box className={classes.emoji}>
        <i className={getEmoji(votes)} />
      </Box> */}
    </Box>
  );
}

export default Joke;
