import { withRouter } from "react-router";
import { DetailSearch } from "../api/DetailSearch";

function Details({bizID, bizDetails, setBizDetails}) {
    
    DetailSearch({bizID, setBizDetails})
    
    return (
        <>
        
        <p>{bizDetails.name} details</p>
        <p>Rating: {bizDetails.rating} Stars</p>
        <p>{bizDetails.address1}</p>
        </>
    );
}

export default withRouter(Details);