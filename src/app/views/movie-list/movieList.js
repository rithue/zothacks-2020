import MovieListItem from 'app/components/movie-list-item/movieListItem';
import MovieController from 'app/controllers/movieController'
import React, {Component} from 'react'

//generates list of movieListItem components

class MovieList extends Component {
    constructor(props) {
        super(props)
        console.log(props.filters);
        this.state = {
            filters: props.filters,
            //todos is movies
            movies: [
                // {title: "The Witchestest", icon: "https://m.media-amazon.com/images/M/MV5BNjRkYjlhMj…M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", service: "Amazon Instant Video", runtime: 106},
                // {icon: "https://m.media-amazon.com/images/M/MV5BZmY2ZmM5YTktZThiOC00YjEzLTg4YTctMDAxYWEyZmEyZDlhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
                //     runtime: 95,
                //     service: "Amazon Prime Video",
                //     title: "Borat Subsequent Moviefilmtest"}
            ]
        }
    }
    componentDidMount() {
        //this will be the movie controller
        //findAll method is filter
        MovieController.getMoviesByGenre(['hulu','netflix'],'comedy',2019,this.done);
    }
    

    done = (movies) => {
        //this is returned callback (list of key value pairs with movie info)
        this.setState({movies: movies}, (items) => (
            console.log('in movie list cosole:',Array.isArray(items), items)
        ));
    }

    render() {
        //this should display the given info
        return (
            <div className="movie-list">
                {console.log(typeof this.state.movies, this.state.movies)}
                {/*users is movies*/}
                {this.state.movies.map((movie, idx) => {
                    {console.log('in movie list',movie)}
                    return(<MovieListItem key={idx} movie={movie} number={idx}/>);
                })}
            </div>
        )
    }
}

export default MovieList;