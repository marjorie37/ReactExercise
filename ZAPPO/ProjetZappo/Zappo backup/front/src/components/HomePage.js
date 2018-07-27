import React, { Component } from 'react';
import MainContainer from './MainContainer';

//ROUTING
import { Route } from 'react-router-dom';

//MATERIAL-UI COMPONENTS
import { Button } from '@material-ui/core';

//STYLED COMPONENTS
import { RootContainer } from '../styled/container';

//STATELESS COMPONENTS
import GetTitle from '../assets/lib/getTitle';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <RootContainer>
                <Button variant="contained" color="primary">HDJHKJDKQ</Button>
            
                <Route exact path="/main" component={MainContainer} />
            </RootContainer>
        );
    }
}



export default HomePage;