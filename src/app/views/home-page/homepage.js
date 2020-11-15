//homepage view with form and button
//button clicked -> movieList view is displayed

import React, {Component} from 'react'
import {CreateSearch} from "app/components";
import {MovieList} from "app/views"


function HomePage({setFilters}){

    return (
        <div>
            <CreateSearch setFilters={setFilters}>
                
            </CreateSearch>
        </div>

    )
}

export default HomePage;