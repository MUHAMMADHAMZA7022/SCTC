import {configureStore} from "@reduxjs/toolkit"
import userreducer from "./reducer/userreducer";

const store=configureStore({
reducer:({
    userreducer:userreducer
         })
})
export default store;