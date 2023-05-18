import React, { useEffect, useState } from "react";
import axios from "axios";

// const users = [
//   {
//     id: 1,
//     name: "john",
//     email: "john@example.com",
//     username: "john",
//     phone: "9846055236",
//     events: [1, 2, 3],
//   },
//   {
//     id: 2,
//     name: "john",
//     email: "john@example.com",
//     username: "john",
//     phone: "9846055236",
//     events: [1, 2, 3],
//   },
//   {
//     id: 3,
//     name: "john",
//     email: "john@example.com",
//     username: "john",
//     phone: "9846055236",
//     events: [1, 2, 3],
//   },
//   {
//     id: 4,
//     name: "john",
//     email: "john@example.com",
//     username: "john",
//     phone: "9846055236",
//     events: [1, 2, 3],
//   },
//   {
//     id: 5,
//     name: "john",
//     email: "john@example.com",
//     username: "john",
//     phone: "9846055236",
//     events: [1, 2, 3],
//   },
// ];

const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/user/all");
        setUsers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div>
      {/* <table>
        <tr>
          <th>S.N.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Events</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table> */}

      <hr />
      <hr />
      <table>
        <thead>
          <tr>
            <th>Id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Events</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <th>{user._id}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user.username}</th>
              <th>{user.phone}</th>
              <th>{user.events.toString()}</th>
              <th>icons</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
