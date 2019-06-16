import React, {Component} from 'react';
import * as authActions from '../../module/authReducer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class Signin extends Component {

    componentDidUpdate() {
        if(this.props.user) {
            //go to main
        }
    }

    onGoogleLogin = e => {
        console.log("google login")
        this.props.authActions.signinWithGoogle();
    }


    onFacebookLogin = e => {
        console.log("facebook login");
        this.props.authActions.signinWithFacebook();
    }

    onSignOut = e => {
        this.props.authActions.signout();
    }

    render() {
        const {user, accessToken} = this.props;
        return (
            <div>
                <button onClick={this.onGoogleLogin}>Google Login</button>
                <button onClick={this.onFacebookLogin}>facebook Login</button>
                <button onClick={this.onSignOut}>sign out</button>
                <p>
                    {
                        JSON.stringify(user)
                    }
                </p>
                <h1>
                    {accessToken}
                </h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        accessToken: state.auth.accessToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);