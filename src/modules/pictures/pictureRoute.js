import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from "semantic-ui-react";

//import components
import NavMenu from './components/navMenu'
import categories from './category/components/Category'
import Random from './random/components/Random'
import favorites from './favorites/components/Favorites'

class PictureRoute extends Component {
    
    renderRandomPicture = props => {
        const { category } = props.match.params;
        console.log(props);
        return <Random category={category} />;
    }

    render() {

        return (
            <Container>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                    <NavMenu stackable  fluid widths={4} size='massive' style={{maxWidth: 700}}/>
                </div>
                <Switch>
                    <Route exact path='/pictures/category' component={ categories }/>
                    <Route exact path='/pictures/favorites' component={favorites}/>
                    <Route exact path='/pictures/random' component={ this.renderRandomPicture }/>
                    <Route path='/pictures/random/:category' render={ this.renderRandomPicture } />
                </Switch>
            </Container>
        )
    }
}

export default PictureRoute