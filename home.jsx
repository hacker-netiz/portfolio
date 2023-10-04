import React , {useState , useEffect} from 'react'
import Task from './task';

function Home() {
    const initialarray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    const [inputValue , setInputValue] = useState(0);
    console.log(inputValue);
    const [title , setTitle] = useState();
    const [desc , setDesc] = useState();
    const [tasks , setTasks] = useState(initialarray);
    console.log(title , desc);
    const submithandler = (e)=>{
        e.preventDefault();
        setTasks([...tasks , {title , desc}]);
        console.log([...tasks]);
        localStorage.setItem("tasks" , JSON.stringify(tasks));
    }
    const taskremover = (index) =>{
        const tashed = tasks.filter((val , i)=>
        {
          return i !== index;
        })
        setTasks(tashed);
        console.log(tasks);
    };
    useEffect(()=>{
      localStorage.setItem("tasks" , JSON.stringify(tasks));
    },[tasks]);
  return (
    <div className='container'>
            {/* <input style= {{padding:20 , border:"1px solid red"}}
            type="text" 
            placeholder='enter something'
            value={inputValue}
            onChange={(e)=>{
                setInputValue(e.target.value);
            }}
            /> */}
            <h1>Your goals</h1>
            <form onSubmit={submithandler} >
            <input type="text" placeholder='title' value = {title} onChange={(e)=>(
              setTitle(e.target.value)
            )} />
            <textarea placeholder='Description' value={desc} onChange={(e)=>(
              setDesc(e.target.value)
            )}></textarea>
            <button type='submit' style={{backgroundColor : 'black', color: 'white'}}>Add</button>
            </form>
            {tasks.map((item , index)=>{
              return <Task id = {index}  title={item.title} desc = {item.desc} taskremover  = {taskremover} index = {index} />;
            })}
            
    </div>
    
     
  )
}

export default Home