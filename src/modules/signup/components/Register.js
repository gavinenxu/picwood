import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterForm from './RegisterForm'

//import action
import * as actions from '../actions/registerAction'

//login component 
class Register extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          password: ''
        };
    }

    onChangeUsername(event) {
        this.setState({
          username: event.target.value
        });
    }
    
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    
    onRegister() {
        this.props.actions.register(
            this.state.username,
            this.state.password
        )
    }
    
    render() {
        return (
            <RegisterForm
                onChangeUsername={this.onChangeUsername.bind(this)}
                onChangePassword={this.onChangePassword.bind(this)}
                onRegister={this.onRegister.bind(this)}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Register) 