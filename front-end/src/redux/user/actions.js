import UserActionsTypes from "./actions-types";

export const loginUser = (payload)=>({
    type: UserActionsTypes.LOGIN,
    payload,
});

export const logOutUser = () =>({
    type: UserActionsTypes.LOGOUT
});

export const signupUser = (payload) =>({
    type: UserActionsTypes.SIGNUP,
    payload,
});
