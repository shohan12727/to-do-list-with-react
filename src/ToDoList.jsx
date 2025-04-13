import React, {useState} from "react";
function ToDoList () {
    const [tasks,setTasks] = useState (["eat breakfast", "moring walk", "reading newspaper" ]);
    const [newTasks, setNewTasks] = useState (" ");

    function handleInputChange (event) {
        setNewTasks (event.target.value);
    }

    function handleAddTask () {
        if (newTasks.trim () !== " ") {
            setTasks (t => [...t,newTasks]);
            setNewTasks(" ");
        }

    }

    function handleDeleteTask (index) {
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);

    }

    function handleMoveTaskUp (index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks [index], updatedTasks [index-1]]=
            [updatedTasks [index-1], updatedTasks [index]];
            setTasks(updatedTasks);

        }
    }

    function handleMoveTaskDown (index) {
        if(index <index.length-1 ){
            const updatedTasks = [...tasks];
            [ updatedTasks[index], updatedTasks[index+1] ]=
            [ updatedTasks[index+1], updatedTasks[index] ]
            setTasks(updatedTasks);

        }
       

    }


    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input onChange={handleInputChange}></input> 
                <button className="add-btn"
                onClick={handleAddTask}
                >Add</button>
            </div>

            <ol>
                {tasks.map ((task,index) => <li key={index}>
                    <span className="text">{task}</span>

                    <button className="delete-btn"
                            onClick={() => handleDeleteTask(index)}
                            
                            >Delete</button>
                    <button className="move-btn"
                            onClick={ () => handleMoveTaskUp(index)}
                       
                       >Up</button>
                    <button className="move-btn" 
                            onClick={ () => handleMoveTaskDown(index)}
                    
                    >Down</button>


                </li> )}

            </ol>

        </div>

    );

}
export default ToDoList;