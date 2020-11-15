import MovieListItem from 'app/components/movie-list-item/movieListItem';
import MovieController from 'app/controllers/movieController'
import React, {Component} from 'react'

//generates list of movieListItem components

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //todos is movies
            movies: [{"title":"movie1","description":"smth","year":2019},
            {"title":"movie2","description":"smth1","year":2018}]
        }
    }
    componentDidMount() {
        //this will be the movie controller
        //findAll method is filter
        MovieController.getMoviesByGenre(['hulu','netflix'],'comedy',2019,this.done);
    }

    done = (movies) => {
        //this is returned callback (list of key value pairs with movie info)
        this.setState({ movies: movies });
    }

    render() {
        //this should display the given info
        return (
            <div className="movie-list">
                {/*users is movies*/}
                {this.state.movies.map((movie, idx) => {
                    return(<MovieListItem key={idx} movie={movie} number={idx}/>);
                })}
            </div>
        )
    }
}

export default MovieList;