import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//import components
import login from './login/components/Login';
import register from './signup/components/Register'
import picture from './pictures/pictureRoute'


export default class App extends Component {
   
    render() {
        return (
            <Router>
                <div id='App'>
                    <Switch>
                        <Route path='/signup' component={ register } />
                        <Route path='/pictures' component={ picture } />
                        <Route component={ login }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}



