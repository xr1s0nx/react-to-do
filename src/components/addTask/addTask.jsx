import React from 'react';
import { connect } from 'react-redux';
import { addTask, changeInpText } from '../../redux/tasks-reducer';
import classes from './addTask.module.css'

const AddTask = (props) => {
    return (
        <div className={classes.addTask}>
            <div className={props.addFieldEmpty ? classes.emptyBlock + ' ' + classes.active : classes.emptyBlock}>
                <p>field must not be empty</p>
            </div>
            <input onChange={(e) => props.changeInpText(e.target.value)} value={props.NowTextInp} type="text" placeholder='Enter task...' className={props.addFieldEmpty ? classes.addInp + ' ' + classes.empty : classes.addInp}/>
            <button onClick={() => {props.addTask()}} className={classes.addTaskBtn}>Add task</button>
        </div>
    );
}

const mapStateToProp = (state) => {
    return {
        NowTextInp: state.tasks.NowTextInp,
        addFieldEmpty: state.tasks.addFieldEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInpText: (text) => {
            dispatch(changeInpText(text))
        },
        addTask: () => {
            dispatch(addTask())
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(AddTask);
