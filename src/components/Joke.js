import React, { useCallback } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  joke: {
    display: "flex",
    borderBottom: "2px solid black",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 400,
    padding: "1rem",
  },
  btn: {
    display: "flex",
    flexDirection: "column",
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
  text: {
    width: "75%",
    fontSize: "1.2rem",
  },
  emoji: {
    fontSize: "3rem",
    marginLeft: "auto",
    borderRadius: "50%",
    boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
  },
}));

function Joke({ votes, text, id, like, dislike }) {
  const classes = useStyles();
  console.log(votes);
  const getEmoji = useCallback((votes) => {
    if (votes >= 9) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (votes >= 6) {
      return "em em-laughing";
    } else if (votes >= 3) {
      return "em em-slightly_smiling_face";
    } else if (votes >= 0) {
      return "em em-neutral_face";
    } else {
      return "em em-angry";
    }
  }, []);

  return (
    <Box className={classes.joke}>
      <Box className={classes.btn}>
        <ThumbUpOutlined
          style={{ color: "green" }}
          className={classes.likeBtn}
          onClick={() => like()}
        />
        <Typography className={classes.votes}>{votes}</Typography>
        <ThumbDownOutlined
        style={{ color: "red" }}
          className={classes.likeBtn}
          onClick={() => dislike()}
        />
      </Box>
      <Box className={classes.text}>{text}</Box>
      <Box className={classes.emoji}>
        <i className={getEmoji(votes)} />
      </Box>
    </Box>
  );
}

export default Joke;
