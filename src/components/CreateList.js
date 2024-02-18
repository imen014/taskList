import React, { useState } from "react";
import './taskStyle.css';

function CreateList(){
    const [task, setTask] = useState("")
    const [isTaskSet, setIsTaskSet] = useState(false)
    const [listTask, setListTask] = useState([])
    const [isThemeChanged, setIsThemeChanged] = useState(false)

    function create_task(e){
        setTask(e.target.value);
    };

    function taskCreated(){
        setIsTaskSet(!isTaskSet);
    };

    function create_list_task(){
        setListTask([...listTask,task]);
    };

    function modifier_theme(){
        setIsThemeChanged(!isThemeChanged);
    };

    
    

    return (
        <div className={isThemeChanged? "darkTheme" : "whiteTheme"}>
            <input type="text" placeholder="create a task" onChange={create_task} onBlur={taskCreated}/>
            <input type="button" onClick={create_list_task}  value="validate" />
            <button onClick={modifier_theme}> Changer theme  </button>
            <ul>
               {listTask.map((task,index) => (

                <li>item{index}: {task} </li>
               ))}
               </ul>
               
            </div>
    )
}

export default CreateList;