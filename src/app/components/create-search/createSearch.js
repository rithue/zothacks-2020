import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from "axios";
import "./createSearch.scss"

function CreateSearch({setFilters}){
    const [streamingService, setStreamingService] = useState(null);
    const [genre, setGenre] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [netflix, setNetflix] = useState("");
    const [amazonP, setAmazonP] = useState("");
    const [amazonI, setAmazonI] = useState("");
    const [iTunes, setiTunes] = useState("");
    const [nowTV, setNowTV] = useState("");
    const [talTalk, setTalTalk] = useState("");
    const [googlePlay, setGooglePlay] = useState("");
    const [bBC, setBBC] = useState("");
    const [all4, setAll4] = useState("");
    const [my5, setMy5] = useState("");
    const [rakutenTV, setRakutenTV] = useState("");
    const [iTVHub, setITVHub] = useState("");


    /*function search(){
        

        var chkNetflix = document.getElementById("chkNetflix");
        if (chkNetflix.checked ){
            services.push(chkNetflix.value)
        }
        var chkAmazonP = document.getElementById("chkAmazonP");
        if (chkAmazonP.checked){
            services.push(chkAmazonP.value)
        }
        var chkAmazonI = document.getElementById("cchkAmazonI");
        if (chkAmazonI.checked){
            services.push(chkAmazonI.value)
        }
        var chkiTunes = document.getElementById("chkiTunes");
        if (chkiTunes.checked){
            services.push(chkiTunes.value)
        }
        var chkNowTV = document.getElementById("chkNowTV");
        if (chkNowTV.checked){
            services.push(chkNowTV.value)
        }
        var chkTalTalk = document.getElementById("chkTalTalk");
        if (chkTalTalk.checked){
            services.push(chkTalTalk.value)
        }
        var chkGooglePlay = document.getElementById("chkGooglePlay");
        if (chkGooglePlay.checked){
            services.push(chkGooglePlay.value)
        }
        var chkBBC = document.getElementById("chkBBC");
        if (chkBBC.checked){
            services.push(chkBBC.value)
        }
        var chkAll4 = document.getElementById("chkAll4");
        if (chkAll4.checked){
            services.push(chkAll4.value)
        }
        var chkMy5 = document.getElementById("chkMy5");
        if (chkMy5.checked){
            services.push(chkMy5.value)
        }
        var chkRakutenTV = document.getElementById("chkRakutenTV");
        if (chkRakutenTV.checked){
            services.push(chkRakutenTV.value)
        }
        var chkITVHub = document.getElementById("chkITVHub");
        if (chkITVHub.checked){
            services.push(chkITVHub.value)
        }

        setStreamingService(services);


        filters = {
            streamingService: streamingService,
            genre: genre,
            releaseYear: releaseYear
        };

        //pass filters to moviecontroller
        //change to movielist page

    }*/

    async function check() {
        var services = [];

        if (netflix != ""){
            services.push(netflix)
        }
        console.log(netflix);
        console.log(services);

        if (amazonP != ""){
            services.push(amazonP)
        }
        if (amazonI != ""){
            services.push(amazonI)
        }
        if (iTunes != ""){
            services.push(iTunes)
        }
        if (nowTV != ""){
            services.push(nowTV)
        }
        if (talTalk != ""){
            services.push(talTalk)
        }
        if (googlePlay != ""){
            services.push(googlePlay)
        }
        if (bBC != ""){
            services.push(bBC)
        }
        if (all4 != ""){
            services.push(all4)
        }
        if (my5 != ""){
            services.push(my5)
        }
        if (rakutenTV != ""){
            services.push(rakutenTV)
        }
        if (iTVHub != ""){
            services.push(iTVHub)
        }

        console.log(services);
        //await setStreamingService(services);
        //console.log(streamingService);

        setFilters({
            streamingService: services,
            genre: genre,
            releaseYear: releaseYear
        });
        
    }

    return (
        //check boxes for streaming service
        //drop down menu for genres
        //text for release year
        <form className = "myForm">
            <h1>Streaming Services</h1>

            <label for="chkNetflix"><input type="checkbox" id="chkNetflix" value="Netflix" onChange={(event) => setNetflix(event.target.value)}/>Netflix</label>

            <label for="chkAmazonP"><input type="checkbox" id="chkAmazonP" value="Amazon Prime" onChange={(event) => setAmazonP(event.target.value)}/>Amazon Prime</label>

            <label for="chkAmazonI"><input type="checkbox" id="chkAmazonI" value="Amazon Instant" onChange={(event) => setAmazonI(event.target.value)}/>Amazon Instant</label>

            <label for="chkiTunes"><input type="checkbox" id="chkiTunes" value="iTunes" onChange={(event) => setiTunes(event.target.value)}/>iTunes</label>

            <label for="chkNowTV"><input type="checkbox" id="chkNowTV" value="Now TV" onChange={(event) => setNowTV(event.target.value)}/>Now TV</label>

            <label for="chkTalTalk"><input type="checkbox" id="chkTalTalk" value="TalTalk TV Store" onChange={(event) => setTalTalk(event.target.value)}/>TalTalk TV Store</label>

            <label for="chkGooglePlay"><input type="checkbox" id="chkGooglePlay" value="Google Play" onChange={(event) => setGooglePlay(event.target.value)}/>Google Play</label>

            <label for="chkBBC"><input type="checkbox" id="chkBBC" value="BBC Iplayer" onChange={(event) => setBBC(event.target.value)}/>BBC Iplayer</label>

            <label for="chkAll4"><input type="checkbox" id="chkAll4" value="All 4" onChange={(event) => setAll4(event.target.value)}/>All 4</label>

            <label for="chkMy5"><input type="checkbox" id="chkMy5" value="My 5" onChange={(event) => setMy5(event.target.value)}/>My 5</label>

            <label for="chkRakutenTV"><input type="checkbox" id="chkRakutenTV" value="Rakuten TV" onChange={(event) => setRakutenTV(event.target.value)}/>Rakuten TV</label>

            <label for="chkITVHub"><input type="checkbox" id="chkITVHub" value="ITV Hub" onChange={(event) => setITVHub(event.target.value)}/>ITV Hub</label>


            <h1>Genre</h1>
            <select id="genre" name="genre" onChange={(event) => setGenre(event.target.value)} >
                <option value="Comedy">Comedy</option>
                <option value="SciFi">SciFi</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Romance">Action</option>
                <option value="Thriller">Thriller</option>
                <option value="Drama">Drama</option>
                <option value="Mystery">Mystery</option>
                <option value="Crime">Crime</option>
                <option value="Animation">Animation</option>
                <option value="Adventure">Adventure</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Comedy-Romance">Comedy-Romance</option>
                <option value="Action-Comedy">Action-Comedy</option>
                <option value="Superhero">Superhero</option>
            </select>

            <h1>Release Year</h1>
            <input type = "year" onChange={(event) => setReleaseYear(parseInt(event.target.value,10))}/>

            <Link onClick = {check}
                to={{
                    pathname: "/movies",
                }}
                activeStyle={{ color: 'white' }}
            >SUMBIT</Link>

            <p id="error-message"></p>
        
        </form>

    )
}

export default CreateSearch;