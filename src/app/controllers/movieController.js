import { MovieList } from "app/views";
import axios from "axios"

let year1 = 0;


class MovieController {
  //let movlist = [];
  
  getMoviesByGenre(services, genre, year, callback) {
    year1 = year;

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
      params: { genre: '/chart/popular/genre/' + genre },
      headers: {
        'x-rapidapi-key': '8ff418ea57msh9e66f4691395d21p124af9jsndfa3c31fdb8b',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      this.movieFilterYear(response.data, function (response){
        console.log('in genre:',response)
        callback(response);
      })
    }).catch(function (error) {
      console.error(error);
    });


  }
  movieFilterYear(idlist, callback) {
    let movlist = []
    for (let i = 0; i < idlist.length; i++) {
      if (i >= 4) {
        break;
      }
      var item_array = idlist[i].split('/');
      const options1 = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-details',
        params: { 'tconst': item_array[2] },
        //params: {'tconst': 'tt0944947'},
        headers: {
          'x-rapidapi-key': '8ff418ea57msh9e66f4691395d21p124af9jsndfa3c31fdb8b',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      };

      axios.request(options1).then((response) => {
        console.log(response.data.title);
        console.log(response.data.year)
        if (response.data.year == 2020) {
          this.movieFilterService(response.data.title, response.data.image.url, response.data.runningTimeInMinutes, function (response) {
            movlist.push(response);
          })
          //console.log('here')
          console.log(response.data.title)
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
    callback(movlist);
  }
  movieFilterService = function (title, imageurl, runtime, callback) {
    const options2 = {
      method: 'GET',
      url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
      params: { term: title },
      headers: {
        'x-rapidapi-key': '8ff418ea57msh9e66f4691395d21p124af9jsndfa3c31fdb8b',
        'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
      }
    };

    axios.request(options2).then((response) => {
      if (response.data.results[0] != null) {
        console.log(response.data.results[0].locations[0].display_name);
        //console.log({"title":title,"icon":imageurl,"service":response.data.results[0].locations[0].display_name,"runtime":runtime})
        callback({ "title": title, "icon": imageurl, "service": response.data.results[0].locations[0].display_name, "runtime": runtime });
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
}

export default new MovieController();
