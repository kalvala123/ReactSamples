import React from 'react';
import {Link , Route} from "react-router-dom"

const NestedView = ({match}) => {
    return(
        <div>
            <Route exact path={match.url} render={() => (<h3>please select a section : </h3>)} />
            <Link to={`${match.url}/Info`}>Info - </Link>
            <Link to= {`${match.url}/about`}>About - </Link>
            <Link to ={`${match.url}/contacts`}>Contact -</Link>
            <Route path={`${match.url}/:sectionName`} component={SubView} />
        </div>
    )
};

const SubView = ({match}) => (
    <div>
        <h3>section {match.params.sectionName}</h3>
    </div>
)

export default NestedView