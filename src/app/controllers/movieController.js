import { MovieList } from "app/views";
import axios from "axios";
//import {http} from "app/utilities";
import wrapper from "axios-cache-plugin";

let http = wrapper(axios, {
    maxCacheSize: 100000,
    ttl: 600000
})

let year1 = 0;
let services1 = []
http.__addFilter(/(get-details|get-popular-movies-by-genre|lookup|images)/);

class MovieController {
  //let movlist = [];
  
  getMoviesByGenre(services, genre, year, callback) {
    year1 = year;
    services1 = services

    http({
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
      params: { genre: '/chart/popular/genre/' + genre },
      headers: {
        'x-rapidapi-key': '0a29a2e762msh8aba990f87409bfp16aa51jsnfb0cef502b74',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    }).then((response) => {
      console.log(response.data);
      this.movieFilterYear(response.data, function (response1){
        console.log('in genre:',Array.isArray(response1),response1)
        callback(response1);
        // callback([
        //   {title: "The Witches", icon: "https://m.media-amazon.com/images/M/MV5BNjRkYjlhMj…M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", service: "Amazon Instant Video", runtime: 106, url: "https://www.google.com"},
        //   {title: "V for Vendetta", icon: "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_.jpg", service: "Google Play", runtime: 132, url: "https://www.amazon.com/V-Vendetta-Natalie-Portman/dp/B000HVHM5S/ref=sr_1_1?crid=2TJHMWUVUUXP2&dchild=1&keywords=prime+videonv+f0r+vendetta&qid=1605440953&sprefix=panthai%2Caps%2C218&sr=8-1"}
        // ])
      })
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  async movieFilterYear(idlist, callback) {
    let movlist = []
    for (let i = 0; i < idlist.length; i++) {
      if (i >= 4) {
        break;
      }
      var item_array = idlist[i].split('/');
      let cacheKey = 'https://imdb8.p.rapidapi.com/title/get-details' +
                    '?tconst:' + item_array[2];
      let cached = sessionStorage.getItem(cacheKey)
      if (cached !== null) {
        let response = {};
        response['data'] = JSON.parse(cached);
        if (response.data.year == year1) {
          this.movieFilterService(response.data.title, response.data.image.url, response.data.runningTimeInMinutes, function (response) {
            movlist.push(response);
            //movlist.push({title: "The Witchestest", icon: "https://m.media-amazon.com/images/M/MV5BNjRkYjlhMj…M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", service: "Amazon Instant Video", runtime: 106});
            });
          continue;
        }
      }
      await http({
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-details',
        params: { 'tconst': item_array[2] },
        //params: {'tconst': 'tt0944947'},
        headers: {
          'x-rapidapi-key': '0a29a2e762msh8aba990f87409bfp16aa51jsnfb0cef502b74',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      }).then((response) => {
        if(response) {
          sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
        }
        //console.log(response.data.title);
        //console.log(response.data.year)
        if (response.data.year == year1) {
          this.movieFilterService(response.data.title, response.data.image.url, response.data.runningTimeInMinutes, function (response) {
            movlist.push(response);
            //movlist.push({title: "The Witchestest", icon: "https://m.media-amazon.com/images/M/MV5BNjRkYjlhMj…M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", service: "Amazon Instant Video", runtime: 106});
          })
          //console.log('here')
          console.log(response.data.title)
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
    console.log('moviefilteryear:',movlist)
    callback(movlist);
  }

  movieFilterService = async function (title, imageurl, runtime, callback) {
    let cacheKey = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup' +
                  '?term:' + title;
    let cached = sessionStorage.getItem(cacheKey)
    if (cached !== null) {
      console.log("inside lookup.cache", cached);
      let response = {};
      response['data'] = JSON.parse(cached);
      if (response.data.results[0] != null) {
        for(let i = 0; i < response.data.results[0].locations.length; i++){
          console.log('services1:',services1,'response result:',response.data.results[0].locations[i].display_name,'does include?:',services1.includes(response.data.results[0].locations[i].display_name));
          if(services1.includes(response.data.results[0].locations[i].display_name)){
            callback({ "title": title, "icon": imageurl, "service": response.data.results[0].locations[i].display_name, "runtime": runtime, "url": response.data.results[0].locations[i].url});
            break;
          }
        }
        console.log(response.data.results[0].locations[0].display_name);
        //console.log({"title":title,"icon":imageurl,"service":response.data.results[0].locations[0].display_name,"runtime":runtime})
      }
      return;
    }
    await http({
      method: 'GET',
      url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
      params: { term: title },
      headers: {
        'x-rapidapi-key': '8ff418ea57msh9e66f4691395d21p124af9jsndfa3c31fdb8b',
        'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
      }
    }).then((response) => {
      if(response) {
        sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
      }
      if (response.data.results[0] != null) {
        for(let i = 0; i < response.data.results[0].locations.length; i++){
          console.log('services1:',services1,'response result:',response.data.results[0].locations[i].display_name,'does include?:',services1.includes(response.data.results[0].locations[i].display_name));
          if(services1.includes(response.data.results[0].locations[i].display_name)){
            callback({ "title": title, "icon": imageurl, "service": response.data.results[0].locations[i].display_name, "runtime": runtime, "url": response.data.results[0].locations[i].url});
            break;
          }
        }
        //console.log(response.data.results[0].locations[0].display_name);
        //console.log({"title":title,"icon":imageurl,"service":response.data.results[0].locations[0].display_name,"runtime":runtime})
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
}

export default new MovieController();
