//homepage view with form and button
//button clicked -> emissions is displayed

import React, {Component} from 'react'
import {CreateSearch} from "app/components";


function HomePage({setFilters}){

    return (
        <div>
            <CreateSearch setFilters={setFilters}>
                
            </CreateSearch>
        </div>

    )
}

export default HomePage;