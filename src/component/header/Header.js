import React, {Component} from 'react'
import {Menu, Button} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import * as authActions from '../../module/authReducer';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'


class Header extends Component {

        onLogout = () => {
            this.props.authActions.signout();
        }
        render() {
            const {user} = this.props;
            if(user) {
                return (
                    <Menu>
                        <Menu.Item header>
                            게시판
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/">홈</Link>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Button onClick={this.onLogout}>로그아웃</Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                )
            } else {
                return (
                    <Menu>
                        <Menu.Item header>
                            게시판
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/">홈</Link>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Link to="/login">로그인</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/signup">회원가입</Link>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                )
            }
        }
    }
    
    const mapStateToProps = (state) => {
        return {
            user: state.auth.user,
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            // logout : () => dispatch(logout())
            authActions: bindActionCreators(authActions, dispatch)
        }
    }
export default connect(mapStateToProps, mapDispatchToProps) (Header);