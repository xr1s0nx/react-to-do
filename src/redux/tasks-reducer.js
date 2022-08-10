const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
const CHANGE_INP_TEXT = 'CHANGE_INP_TEXT';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const SET_PAGE_ALL = 'SET_PAGE_ALL';
const SET_PAGE_COMPLETE = 'SET_PAGE_COMPLETE';

let initialState = {
    tasksData: [],
    NowTextInp: '',
    addFieldEmpty: false,
    pageAll: true,
    pageComplete: false,
    completeTasks: []
}


export const tasksReducer = (state = initialState, action) => {


    switch (action.type) {
        case TOGGLE_COMPLETE:
            return {
                ...state,
                tasksData: state.tasksData.map((task) => {
                    if (task.id === action.id) {
                        task.complete = !task.complete
                    }
                    return task;
                })
            }
        case CHANGE_INP_TEXT:
            if (action.text.length < 21) {
                return {
                    ...state,
                    NowTextInp: action.text,
                    addFieldEmpty: false
                }
            } else {
                return {
                    ...state,
                    addFieldEmpty: false
                }
            }

        case ADD_TASK:
            if (state.NowTextInp.replace(/\s+/g, '').length > 0) {
                let newTask = {
                    id: state.tasksData.length + 1,
                    taskName: state.NowTextInp,
                    complete: false
                }
                return {
                    ...state,
                    tasksData: [...state.tasksData, newTask],
                    NowTextInp: '',
                    addFieldEmpty: false
                }
            } else {
                return {
                    ...state,
                    addFieldEmpty: true
                }
            }

        case DELETE_TASK:
            return {
                ...state,
                tasksData: state.tasksData.filter(item => item.id !== action.id)
            }
        case SET_PAGE_COMPLETE:
            return {
                ...state,
                pageAll: action.param,
                pageComplete: !action.param
            }
        case SET_PAGE_ALL:
            return {
                ...state,
                pageAll: !action.param,
                pageComplete: action.param
            }
        default:
            return state
    }

}


export const toggleComplete = (id) => ({ type: TOGGLE_COMPLETE, id });
export const changeInpText = (text) => ({ type: CHANGE_INP_TEXT, text });
export const addTask = () => ({ type: ADD_TASK });
export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const setPageAll = (param) => ({ type: SET_PAGE_ALL, param });
export const setPageComplete = (param) => ({ type: SET_PAGE_COMPLETE, param });