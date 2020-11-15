import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import "./userCard.scss";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: theme.spacing(5)
  },
}));

function MovieListItem({ movie , number}) {
  const classes = useStyles();
  return (
    // <div className="movie-list-item">
    //   <div className="tag">
    //     {console.log('movie list item:',movie)}
    //     <h1>{number + 1}</h1>
    //   </div>
    //   <h2>
    //     {movie.title}
    //   </h2>
    //   <h3>Available on: {movie.service}</h3>
    //   <h4>{movie.runtime}</h4>
    // </div>
    <Box m={7} pt={5}>
      <Card className={classes.root} spacing={5}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie Image"
          height="300"
          image={movie.icon}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Movie Length: {movie.runtime} minutes
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" color="primary" href={movie.url}>
          Watch now
        </Button>
      </CardActions>
    </Card>
  </Box>
  );
}

export default MovieListItem;