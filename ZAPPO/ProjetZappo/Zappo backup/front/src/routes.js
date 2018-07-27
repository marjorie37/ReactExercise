import { Route } from 'react-router-dom';
import React from 'react';
import HomePage from './components/HomePage';
import PropsTypes from 'prop-types';



const NewRoute = ({ component: Component, ...rest }) => <Route {...rest} exact path="/" component={HomePage} />


NewRoute.propTypes={
    component: PropsTypes.element.isRequired,
    rest:PropsTypes.any
}


const routes = () => {
    return <div>
        <Route path="/" component={HomePage}/>
     </div>
}

export default routes;