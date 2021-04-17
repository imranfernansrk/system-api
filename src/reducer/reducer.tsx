import { SystemAPIModels } from "../models";
import { ActionObject } from "../actions";
import { Types } from "../actions";

const initialSystemAPIState: SystemAPIModels.RootState = {
    datas: {},
    companies: {},
    newUser: {}
}

export const systemAPIReducer = (state: SystemAPIModels.RootState = initialSystemAPIState, action: ActionObject): SystemAPIModels.RootState => {
    console.log('systemAPIReducer', action.payload)
    switch (action.type) {
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                datas: action.payload,
            }
        case Types.USER_LOGIN_FAILED:
            return {
                ...state,
                datas: { "error": action.payload },
            }
        case Types.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                newUser: action.payload,
            }
        case Types.USER_SIGNUP_FAILED:
            return {
                ...state,
                newUser: { "error": action.payload },
            }
        case Types.USER_LOGOUT_ACTION:
            return {
                ...state,
                datas: action.payload,
            }
        case Types.COMPANIES_FETCH_SUCCESS:
            return {
                ...state,
                companies: action.payload,
            }
        case Types.COMPANIES_FETCH_FAILED:
            return {
                ...state,
                companies: { "error": action.payload },
            }
        default: return state;
    }
}