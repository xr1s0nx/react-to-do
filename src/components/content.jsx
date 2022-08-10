import React from "react";
import classes from "./content.module.css";
import Header from "./header/header";
import Tasks from "./tasks/tasks";
import { Routes, Route, Navigate } from "react-router-dom";
import CompleteTasks from "./tasks/completeTasks";

const Content = () => {
   return (
      <div className={classes.content}>
         <Header />
         <Routes>
            <Route path={"/all-tasks"} element={<Tasks />} />
            <Route path={"/complete-tasks"} element={<CompleteTasks />} />
            <Route path="/" element={<Navigate replace to={'/all-tasks'}/>} />
         </Routes>
      </div>
   );
};

export default Content;
