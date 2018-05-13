import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginForm from './LoginForm'

//import action
import * as actions from '../actions/authAction'

//login component 
class Login extends Component {

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
    
    onLogin() {
        //console.log(this.props.actions.login);
        this.props.actions.login(
            this.state.username,
            this.state.password
        )
    }
    
    render() {
        
        const { authReducer } = this.props;
        
        if(authReducer.logined) {
            console.log("logined");
            window.location.href = 'http://localhost:3000/pictures/category'
        }
        return (
            <LoginForm
                onChangeUsername={this.onChangeUsername.bind(this)}
                onChangePassword={this.onChangePassword.bind(this)}
                onLogin={this.onLogin.bind(this)}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login) 
