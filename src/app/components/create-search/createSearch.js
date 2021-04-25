import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from "axios";
import "./createSearch.scss"

function CreateSearch({setFilters}){
    const [startZip, setStartZip] = useState("");
    const [endZip, setEndZip] = useState("");
    const [type, setType] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    async function check() {

        setFilters({
            startZip: startZip,
            endZip: endZip,
            type: type
        });
        
    }

    return (
        //text for starting zipcode
        //text for ending zipcode
        //drop down menu for fuel type
        <form className = "myForm">
            <h1>Calculate Your Vehicle Emissions!</h1>

            <h2>Starting ZipCode</h2>
            <input type = "startZip" onChange={(event) => setStartZip(parseInt(event.target.value,10))}/>

            <h2>Ending ZipCode</h2>
            <input type = "endZip" onChange={(event) => setEndZip(parseInt(event.target.value,10))}/>

            <h2>Fuel Type</h2>
            <select id="type" name="type" onChange={(event) => setType(event.target.value)} >
                <option value="Gas">Gas</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
            </select>

            <Link onClick = {check}
                to={{
                    pathname: "/movies",
                }}
            >SUMBIT</Link>

            <p id="error-message"></p>
        
        </form>

    )
}

export default CreateSearch;