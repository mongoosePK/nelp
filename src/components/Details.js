import { withRouter } from "react-router";
import { DetailSearch } from "../api/DetailSearch";
import { useState } from "react"
function Details({id}) {
    const [bizDetails, setBizDetails] = useState([]);

    DetailSearch({id, setBizDetails})
    // const details = bizDetails.map(item => )

    return (
        <>
            <ul>
                {bizDetails.map(item => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.rating}</p>
                        <p>{item.location.address1}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default withRouter(Details);