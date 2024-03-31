import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import authReducer from '../features/auth/authSlice'
import taskReducer from '../features/tasks/taskSlice'

const reducer = combineReducers( {
    auth: authReducer,
    tasks: taskReducer
})

export const store = configureStore({
    reducer
})