import { withRouter } from "react-router";
import { DetailSearch } from "../api/DetailSearch";
import { useState } from "react"

function Details({id, bizDetails}) {
    
    
    console.log(bizDetails)
    //DetailSearch({id, bizDetails, setBizDetails})

    return (
        <>
            <ul>
                {id} Details Coming!!!
                {/* {bizDetails.map(item => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.rating}</p>
                        <p>{item.location.address1}</p>
                    </li>
                ))} */}
            </ul>
        </>
    );
}

export default withRouter(Details);