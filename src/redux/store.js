import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks-reducer";


const reducers = combineReducers({
    tasks: tasksReducer
})

const Store = createStore(reducers)


export default Store;