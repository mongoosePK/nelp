import { Link, withRouter } from 'react-router-dom';

function BusinessCard ({business, setBizID }) {

    const setID = (id) => {setBizID(id)}

    return(
        <>
        <Link to="/Details">
            <button onClick={() =>  setID(business.id)} value={business.id}>
                <h2>{business.name}</h2>
                <img src={business.image_url} height="300" width="150" />
            </button>
        </Link>
        </>
    );
}

export default withRouter(BusinessCard);