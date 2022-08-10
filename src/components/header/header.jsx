import React from 'react';
import classes from './header.module.css'
import { NavLink } from 'react-router-dom';
import allImg from '../../clipboard.png';
import completeImg from '../../checklist.png';
import { connect } from 'react-redux';
import { setPageAll, setPageComplete } from '../../redux/tasks-reducer';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink onClick={() => {props.setPageAll(true)}} className={props.pageAll ? `${classes.button} ${classes.active}` : `${classes.button}`} to="/all-tasks">
                <img src={allImg} alt="" />
            </NavLink>
            <NavLink onClick={() => {props.setPageComplete(true)}} className={props.pageComplete ? `${classes.button} ${classes.active}` : `${classes.button}`} to="/complete-tasks">
                <img src={completeImg} alt="" />
            </NavLink>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        pageAll: state.tasks.pageAll,
        pageComplete: state.tasks.pageComplete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPageAll: (param) => {
            dispatch(setPageAll(param))
        },
        setPageComplete: (param) => {
            dispatch(setPageComplete(param))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
