import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {connect} from'react-redux';
import MainPage from './page/MainPage';
import SigninPage from './page/SigninPage';
import SignupPage from './page/SignupPage';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route path="/" exact component ={() =>{
          if(this.props.user && this.props.user.displayName) {
            return <MainPage/>
          } else if(this.props.user){
            return <Redirect to="/display-name"/>
          } else {
            return <Redirect to="/login"/>
          }
        }}/>
        <Route path="/login" component ={()=> {
          if(this.props.user) {
            return <Redirect to="/"/>
          } else {
            return <SigninPage/>
          }
        }}/>
        <Route path="/signup" component ={() => {
          if(this.props.user) {
            return <Redirect to="/"/>
          } else {
            return <SignupPage/>
          }
        }}/>
        {/* <Route path="/display-name" component ={() => {
          if(this.props.user && this.props.user.displayName) {
            return <Redirect to="/"/>
          } else if(this.props.user){
            return <DisplayNamePage/>
          } else {
            return <Redirect to="/login"/>
          }
        }}/> */}
        <Footer/>
    </Router>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    user : state.auth.user
  }
}

export default connect(mapStateToProps, null)(App);
