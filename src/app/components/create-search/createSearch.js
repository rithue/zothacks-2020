import React, {useState} from 'react';
import { motion } from "framer-motion";
import axios from "axios";
import "./createSearch.scss"

function CreateSearch(){
    return (
        //check boxes for streaming service
        //drop down menu for genres
        //text for release year
        <form className = "myForm">
            <label>Streaming Services</label>
            <input type = "text" required/>

            <label>Genre</label>
            <select id="genre" name="genre">
                <option>Comedy</option>
                <option>SciFi</option>
                <option>Horror</option>
                <option>Romance</option>
                <option>Action</option>
                <option>Thriller</option>
                <option>Drama</option>
                <option>Mystery</option>
                <option>Animation</option>
                <option>Adventure</option>
            </select>

            <label>Release Year</label>
            <input type = "year"/>

            <input className="button" type="submit" value="Search"/>
            <button className="button" type="button">Cancel</button>

            <p id="error-message"></p>
        
        </form>

    )
}

export default CreateSearch;