import { Link, withRouter } from 'react-router-dom';
import Details from './Details';

function BusinessCard ({business}) {
    

    return(
        <>
        <Link to="/Details">
            <div onClick={<Details id={business.id}/> }>
                <h2>{business.name}</h2>
                <img src={business.image_url} height="300" width="150" />
            </div>
        </Link>
        </>
    );
}

export default withRouter(BusinessCard);