// rafce
import React from 'react'

const Task = () => {
const [query , setQueary] =React.useState("");
const [tasks,setTasks] = React.useState([])

const handleChange =(e) => {
// console.log(event.target.value)
const {value}= e.target;
setQueary(value);
};
const addTodo =()=> {
    const payload ={
        todo: query,
        status: false,
    };
    let updatedTasks =[...tasks,payload];
    setTasks(updatedTasks);
};

  return (
    // <div>Task</div>
    <>
     <h1>Todo List</h1>
<input placeholder='Something' onChange={handleChange} value={query}/>
<button onClick={addTodo}>ADD TODO</button>
    {
        tasks.map(({todo, status })=>(
            <div>{todo}</div>
        ))
    }
    </>
   
  )
}

export { Task}