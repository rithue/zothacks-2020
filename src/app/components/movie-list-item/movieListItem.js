import React from "react";
import "./movieListItem.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"

//change name to MovieListItem with parameters movie (has attrbutes title, description, service)


function MovieListItem({ movie }) {
  return (
    //add code to display movie list item
    //add image if possible
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.2,
        delay: number * 0.1
      }}
    className="movie-list-item">
      <div className="tag">
        <h1>{number + 1}</h1>
      </div>
      <h2>
        {user.title}
      </h2>
      <h3>Available on: {user.service}</h3>
      <h4>{description}</h4>
    </motion.div>
  );
}

export default MovieListItem;
