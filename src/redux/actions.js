import * as types from "./actionTypes";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const registerStart = () => ({
    type: types.REGISTER_START,
});


const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

const loginStart = () => ({
    type: types.LOGIN_START,
});


const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,

});

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user,
})

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
            updateProfile(user, {
                displayName
            });
            dispatch(registerSuccess(user))
        }).catch((error) => {
            alert(error);
            dispatch(registerFail(error.message))});
    }
};

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
            dispatch(loginSuccess(user))
        }).catch((error) => {
            alert("Invalid email or password");
            dispatch(loginFail(error.message))});
    };
};

export const logoutInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(logoutStart());
        signOut(auth)
            .then((resp) => dispatch(logoutSuccess()))
            .catch((error) => {
                alert(error);
                dispatch(logoutFail(error.message))});
    };
};