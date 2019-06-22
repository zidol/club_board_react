import React, {Component} from 'react'
import axios from 'axios'
import Webstorage from 'react-webstorage'

const storage = new Webstorage(window.localStorage);

class MainPage extends Component {

    onClickLogin = e => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/auth/sign-in',
            data : {
                email : 'ajh3166@naver.com',
                password : '1234'
            }
        }).then((res) => {
            console.log(res.data)
            const accessToken = res.data.accessToken;
            storage.setItem('accessToken', accessToken);
        }).catch((err) => {
            console.log(err)
        })
    }

    onClickUsers = e => {
        const accessToken = storage.getItem('accessToken');
        axios({
            method: 'get',
            headers : {
                authorization : 'Bearer ' + accessToken
            },
            url: 'http://localhost:3000/users'
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    onClickLogout = e => {
        storage.clear();
        //storage removeItem('accessToken');
    }
    render() {
        return(
            <div>
                MainPage
                {/* <button onClick={this.onClickLogin}>login</button>
                <button onClick={this.onClickUsers}>users</button>
                <button onClick={this.onClickLogout}>logout</button> */}
            </div>
        )
    }
}

export default MainPage;