import React from "react";
import "../assets/table.css";

const ObjectTable = () => {
  const object = [
    {
      name: "Parth Solanki",
      address: "228 city road",
      postcard: "3JH",
      rating: 5,
      typeOfFood: "chinese",
    },
    {
      name: "Yax Jethava",
      address: "6 Drummond Street",
      postcard: "1HY",
      rating: 5,
      typeOfFood: "Pizaa",
    },
    {
      name: "Aman Sarvat",
      address: "885 High Road Leytonstone",
      postcard: "1HR",
      rating: 3,
      typeOfFood: "African",
    },
    {
      name: "Bahvin Parmar",
      address: "885 High Road Leytonstone",
      postcard: "1HR",
      rating: 4,
      typeOfFood: "African",
    },
    {
      name: "Nachiket Shiroya",
      address: "854 High School Road ",
      postcard: "3RH",
      rating: 4,
      typeOfFood: "Panjabi",
    },
    {
      name: "Vivek Gosai",
      address: "228 Highcity Road",
      postcard: "3AT",
      rating: 5,
      typeOfFood: "chinese",
    },
  ];

  return (
    <table className="table">
      <tr>
        <th>NO :</th>
        <th>Name</th>
        <th>Address</th>
        <th>Post Card</th>
        <th>Rating</th>
        <th>Type of Food</th>
        <th>Action</th>
      </tr>

      {object.map((val, i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{val.name}</td>
            <td>{val.address}</td>
            <td>{val.postcard}</td>
            <td>{val.rating}</td>
            <td>{val.typeOfFood}</td>
            <td className="edit-removerow">
              <button id="btn1">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button id="btn2">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ObjectTable;
