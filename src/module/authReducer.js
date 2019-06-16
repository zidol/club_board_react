import{handleActions, createAction} from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as types from './actionType';
import {signinAPI, signinWithGoogleAPI, signoutAPI,  signinWithFacebookAPI} from '../infra/firebase/api';

                                    //type      //promise api => infra에서 가져옴
export const signin = createAction(types.SIGN_IN, signinAPI);

export const signinWithGoogle = createAction(types.SIGN_IN_WITH_GOOGLE, signinWithGoogleAPI);

export const signinWithFacebook = createAction(types.SIGN_IN_WITH_FACEBOOK, signinWithFacebookAPI);

export const signout = createAction(types.SIGN_OUT, signoutAPI);

export const updateUser = createAction(types.UPDATE_USER);

export default handleActions({
    //비동기
    //화면상에서 뭔가 실행 될때 사용(안해줘도 됨)
    ...pender({
        type: types.SIGN_IN_WITH_GOOGLE,
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
    }),
    //기본적인 액션
    [types.UPDATE_USER] : (state, action) => {
        return Object.assign({}, state, {
            //변경 된 데이터 내용
            user : action.payload
        });
    }
}, {    //초기값
        user : null,
        accessToken: null,
        error : null,
    }
)