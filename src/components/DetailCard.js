import { withRouter } from 'react-router-dom';

function DetailCard ({business}) {
    
    return(
        <>
        <div>
            <h2>{business.name}</h2>
            <img src={business.image_url} height="300" width="150" />
        </div>
        </>
    );
}

export default withRouter(DetailCard);