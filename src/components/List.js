import React, { useCallback, useEffect, useState } from "react";
import { makeStyles, Box, Paper, Typography } from "@material-ui/core";
import Joke from "./Joke";
import axios from "axios";

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
      display: "flex",
      objectFit: "cover",
      flexDirection: "row",
    fontSize: "2rem",
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
  const [jokes, setJokes] = useState(null);

    const handleVote = useCallback(
        (id, offset) => {
            let filterJoke = jokes.filter((joke) => joke.id !== id);
            let joke = jokes.find((joke) => joke.id === id)
            joke.votes += offset;
            filterJoke.push(joke);
            filterJoke.sort((a, b) => b.votes - a.votes)
            setJokes(filterJoke)
        }, [jokes, setJokes]
    )

  const getJoke = async () => {
    const newJoke = []
    let id = 0
    for(let i=0; i<7; i++){
        let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
          });
          newJoke.push({ id: i, text: res.data.joke, votes: 0 });
        }
        setJokes(newJoke);
}

useEffect(() => {
    getJoke();
}, [])

if(jokes){
    return (
        <Box className={classes.list}>
          <Paper className={classes.sidebar} elevation={5} >
            <Typography className={classes.title}>Welcome to Dad Jokes</Typography>
            <img src="https://cdn3.iconfinder.com/data/icons/emojis-set-1/512/13.png" className={classes.image} alt="smily-display" />
          </Paper>
          <Paper className={classes.listJokes} elevation={4}>
              {jokes.map((joke) => {
                  return(
                    <Joke votes={joke.votes} text={joke.text} key={joke.id} id={joke.id} like={() => handleVote(joke.id, 1)} dislike={() => handleVote(joke.id, -1)} />
                  )
              })}
                
          </Paper>
        </Box>
      );
}
else{
    return(<h1>Loading.............</h1>)
}
  
}

export default List;
