import { Dispatch } from "react";
import axios from "axios";
import { Types } from "./actionTypes";
import { Models, SystemAPIModels } from "../models";
import { API } from "../constants";

export interface ActionObject {
    type: string,
    payload: any | undefined
}
export const userLoginSuccess = (data: any): ActionObject => {
    return {
        type: Types.USER_LOGIN_SUCCESS,
        payload: data
    }
}
export const userLoginFailed = (error: any): ActionObject => {
    return {
        type: Types.USER_LOGIN_FAILED,
        payload: error
    }
}
export const newUserSignupSuccess = (data: any): ActionObject => {
    return {
        type: Types.USER_SIGNUP_SUCCESS,
        payload: data
    }
}
export const newUserSignupFailed = (error: any): ActionObject => {
    return {
        type: Types.USER_SIGNUP_FAILED,
        payload: error
    }
}
export const userLogoutAction = () => {
    return {
        type: Types.USER_LOGOUT_ACTION,
        payload: {}
    }
}
export const companiesFetchSuccess = (data: any): ActionObject => {
    return {
        type: Types.COMPANIES_FETCH_SUCCESS,
        payload: data
    }
}
export const companiesFetchFailed = (error: any): ActionObject => {
    return {
        type: Types.COMPANIES_FETCH_FAILED,
        payload: error
    }
}

export const postUserLoginData = (loginData: Models.Login) => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.post(API.SIGN_IN, loginData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("actions res", res);
                console.log("actions res", res);
                dispatch(userLoginSuccess(res.data));
            })
            .catch(err => {
                console.log("actions res", err.toJSON())
                console.log("actions error", err.response)
                dispatch(userLoginFailed(err.response));
            })
    }
}
export const newUserSignData = (userData: SystemAPIModels.Signup) => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.post(API.SIGN_UP, userData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("actions res", res);
                console.log("actions res", res);
                dispatch(newUserSignupSuccess(res.data));
            })
            .catch(err => {
                console.log("actions res", err.toJSON())
                console.log("actions error", err.response)
                dispatch(newUserSignupFailed(err.response));
            })
    }
}
export const fetchCompaniesDatas = () => {
    return async (dispatch: Dispatch<ActionObject>) => {
        await axios.post(API.COMPANIES, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log("actions res", res);
                console.log("actions res", res);
                dispatch(companiesFetchSuccess(res.data));
            })
            .catch(err => {
                console.log("actions res", err.toJSON())
                console.log("actions error", err.response.status)
                dispatch(companiesFetchFailed(err.response.status));
            })
    }
}
