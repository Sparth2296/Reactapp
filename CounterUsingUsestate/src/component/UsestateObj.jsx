import { useState } from "react";


const UsestateObj = () => {

    const [input,setinput]= useState({
        name:"",
        id:"",
        age:""
    });
    
    const handleState =()=>{
        setinput((pre)=>({...pre,name:"Parth",id:"22",age:"18"}))
    }

    console.log(input);

  return (
    <div>
      <button onClick={handleState } className='btn btn-primary'>click</button>
    </div>
  )
}

export default UsestateObj
