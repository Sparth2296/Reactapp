import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableUsingState = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    bloodGroup: "",
    UserProfilePicture: null
  });

  const handleState = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitFunction = (e) => {
    e.preventDefault();
    console.log(input);
    alert('Form submitted successfully!');

    // You can push this data to a list or do something else here

    // Reset form
    setInput({
      name: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      city: "",
      bloodGroup: "",
      UserProfilePicture: ""
    });
  };

  return (
    <div className="container my-5">
      <form onSubmit={submitFunction} className="p-4 shadow rounded bg-white">
        <h2 className="mb-4">User Information Form</h2>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={input.name}
            onChange={handleState}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleState}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            value={input.phone}
            onChange={handleState}
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              checked={input.gender === "male"}
              onChange={handleState}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              checked={input.gender === "female"}
              onChange={handleState}
            />
            <label className="form-check-label">Female</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="other"
              checked={input.gender === "other"}
              onChange={handleState}
            />
            <label className="form-check-label">Other</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter your address"
            value={input.address}
            onChange={handleState}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Enter your city"
            value={input.city}
            onChange={handleState}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blood Group</label>
          <select
            name="bloodGroup"
            className="form-select"
            value={input.bloodGroup}
            onChange={handleState}
          >
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

        <div className="mb-3">
          <label className="form-label">Upload Profile Picture</label>
          <input
            type="file"
            name="UserProfilePicture"
            accept="image/*"
            className="form-control"
            onChange={handleState}
          />
        </div>

        {input.UserProfilePicture && (
          <div className="mb-3">
            <label className="form-label">Preview:</label><br />
            <img
              src={URL.createObjectURL(input.UserProfilePicture)}
              alt="Preview"
              style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '8px' }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TableUsingState;
