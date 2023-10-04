import React from 'react'

function Task(props) {
  return (
    
    <div className='task'>
        <div >
        <p>{props.title}</p>
        <span>{props.desc}</span>  
        </div>
        <button onClick={()=>props.taskremover(props.index)} >-</button>
    </div>
  )
}

export default Task