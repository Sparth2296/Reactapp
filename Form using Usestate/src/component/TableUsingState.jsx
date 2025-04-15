import React, { useState } from 'react'

const TableUsingState = () => {
  const userObject = []
    const [input, setInput] = useState({}); 

    const hendlState=(e)=>{
        
        const name = e.target.name
        const value = e.target.value
        setInput(pre=>({...pre,[name]:value}))
        
    }
    const SubmitFunction=(e)=>{
        e.preventDefault()
        console.log(input);
        alert('Form Submited succsfuly!!')
        userObject.push(input)
        console.log(userObject);
        setInput({})
        
    }

  return (
    <div className="form-container">
    <form className="user-form">
      <h2>User Information Form</h2>

      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Enter your name"  onChange={hendlState} name='name'/>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={hendlState} name='email'/>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" onChange={hendlState} name='phone'/>
      </div>

      <div className="form-group">
          <label>Gender</label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="gender" value="male" onChange={hendlState} name='gender' /> Male</label>
            <label><input type="checkbox" name="gender" value="female" onChange={hendlState} name='gender' /> Female</label>
            <label><input type="checkbox" name="gender" value="other" onChange={hendlState} name='gender' /> Other</label>
          </div>
        </div>

      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="Enter your address" onChange={hendlState} name='address' />
      </div>

      <div className="form-group">
        <label>City</label>
        <input type="text" placeholder="Enter your city" onChange={hendlState} name='city' />
      </div>

      <div className="form-group">
        <label>Blood Group</label>
        <select  onChange={hendlState} name='bloodGroup'>
          <option value="">Select blood group</option>
          <option value="A+">A+</option>
          <option value="A−">A−</option>
          <option value="B+">B+</option>
          <option value="B−">B−</option>
          <option value="O+">O+</option>
          <option value="O−">O−</option>
          <option value="AB+">AB+</option>
          <option value="AB−">AB−</option>
        </select>
      </div>

      <div className="form-group">
        <label>Upload Profile Picture</label>
        <input type="file" accept="image/*" onChange={hendlState} name='UserProfilePicture'/>
      </div>

      <button type="submit" onClick={SubmitFunction}>Submit</button>
    </form>

    <style>{`
    body{
     background:rgb(221, 221, 221);
     font-family: "Gill Sans", sans-serif;
    }
      .form-container {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        hight;100vh;
      }

      .user-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        background:rgb(255, 255, 255);
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }

      .form-group {
        display: flex;
        flex-direction: column;
      }

      label {
        margin-bottom: 5px;
        font-weight: bold;
      }

      input, select {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
      }

      button {
        padding: 12px;
        background-color: #007bff;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }

      button:hover {
        background-color:rgb(0, 123, 255);
      }

      @media (max-width: 480px) {
        .user-form {
          padding: 15px;
        }

        input, select {
          font-size: 14px;
        }

        button {
          font-size: 14px;
        }
      }
    `}</style>
  </div>
  )
}

export default TableUsingState
