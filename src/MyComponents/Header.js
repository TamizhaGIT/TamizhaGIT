

import React, { useState } from 'react'

const Header = () => {

    const [name,setName] = useState ([
        { 
        id:1,
        taskname : "Call shcedule"
        },
        {
          id:2,
          taskname : "Attend the call"
        },
        {
          id:3,
          taskname : "Analyzing task"
        },
        {
          id:4,
          taskname: "Working on task"
        }      
             
        ]);   


    const [act,setAct] = useState('');

    const [isDone,setIsDone] = useState(false);

    const [remove,setRemove] = useState('');

    const handleAdd = (e) =>{
      setName(...name, e.target.value)
    }
        
    const handleDelete = (id) =>{
      let result = name.filter(item => item.id !== id);
      setRemove(result);
    }

    const handleChecked = (id) =>{
      const result = name.map(item => item.id === id ? !isDone : isDone) 
      setIsDone(result);
    }


  return (


    <div>
        <div>
            <input
            type="text"
            value={act}
            onChange={(e)=> setAct(e.target.value)} 
            />                    

            <button onClick={(e)=>handleAdd}>Add</button>

            <div>          

                  {name.map(item => 
                  <ul style={{
                    display: "flex",
                    justifyContent: "center",
                    listStyle: "none"
                  }}>
                   
                    <li key={item.id}>
                      <input
                      type='checkbox'
                      checked={isDone} 
                      onClick={() =>handleChecked(item.id)}                    
                      />
                      {item.taskname}
                      <button onClick={() => handleDelete(item.id)}>Delete</button></li>                     
                   
                    </ul>
                  ) }            

                                     
                
            </div>     
           
    

        </div>
    </div>
  )
}

export default Header