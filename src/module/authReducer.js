import{handleActions, createAction} from 'redux-actions'
import { pender } from 'redux-pender/lib/utils';
import * as types from './actionType';
import {signinAPI} from '../infra/firebase/api'

                                    //type      //promise api => infra에서 가져옴
export const signin = createAction(type.SIGN_IN, signinAPI);

export default handleActions({
    //비동기
    ...pender({
        type: types.SIGN_IN,
        onSuccess: (state, action) => {
            return Object.assign({}, state, {
                //변경 된 데이터 내용
            });
        },
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                //변경 된 데이터 내용
            });
        }
    }),
    //기본적인 액션
    [types.DEFAULT_ACTION] : (state, action) => {
        return Object.assign({}, state, {
            //변경 된 데이터 내용
        });
    }
}, {
        user : null,
    }
)