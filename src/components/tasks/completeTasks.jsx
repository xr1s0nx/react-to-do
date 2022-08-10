import React from "react";
import { connect } from "react-redux";
import { deleteTask, toggleComplete } from "../../redux/tasks-reducer";
import classes from "./tasks.module.css";
import removeImg from "../../rubbish-bin.png";
import checkMark from '../../check-mark.png'


const CompleteTasks = (props) => {
   return (
      <div className={classes.tasksBlock}>
         <p className={classes.tasksTitle}>{`Complete tasks: ${props.tasksCount}`}</p>
         {props.tasksData.map((task) => {
            if (task.complete) {
               return (
                  <div key={task.id} className={classes.task}>
                     <button
                        onClick={() => {
                           props.toggleComplete(task.id);
                        }}
                        className={classes.taskButton}
                     >
                        {task.complete ? <img src={checkMark} alt=""></img> : null}
                     </button>
                     <p className={task.complete ? classes.taskName + " " + classes.complete : classes.taskName}>{task.taskName}</p>
                     <button
                        onClick={() => {
                           props.deleteTask(task.id);
                        }}
                        className={classes.deleteButton}
                     >
                        <img src={removeImg} alt="" />
                     </button>
                  </div>
               );
            } else {
               return null;
            }
         })}
      </div>
   );
};

let mapStateToProps = (state) => {
   let uncompleteTasks = state.tasks.tasksData.filter((task) => task.complete);
   return {
      tasksData: state.tasks.tasksData,
      tasksCount: uncompleteTasks.length,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      toggleComplete: (id) => {
         dispatch(toggleComplete(id));
      },
      deleteTask: (id) => {
         dispatch(deleteTask(id));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTasks);
