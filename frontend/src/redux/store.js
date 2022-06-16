import {configureStore} from "@reduxjs/toolkit"
import coursereducer from "./reducer/coursereducer";
import userreducer from "./reducer/userreducer";

const store=configureStore({
reducer:({
    userreducer:userreducer,
    coursereducer:coursereducer
         })
})
export default store;