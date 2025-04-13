import React, {useState} from "react";
function ToDoList () {
    const [tasks,setTasks] = useState (["eat breakfast", "moring walk", "reading newspaper" ]);
    const [newTasks, setNewTasks] = useState (" ");

    function handleInputChange (event) {
        setNewTasks (event.target.value);
    }

    function handleAddTask () {
        if

    }

    function handleDeleteTask () {

    }

    function handleMoveTaskUp () {

    }

    function handleMoveTaskDown () {

    }


    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input></input> 
                <button className="add-btn">Add</button>
            </div>

            <ol>
                {tasks.map ((task,index) => <li key={index}>
                    <span className="text">{task}</span>

                    <button className="delete-btn">Delete</button>
                    <button className="move-btn">Up</button>
                    <button className="move-btn">Down</button>


                </li> )}

            </ol>

        </div>

    );

}
export default ToDoList;