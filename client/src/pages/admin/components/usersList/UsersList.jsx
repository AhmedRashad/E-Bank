import "./usersList.css";
import { useState, useEffect } from "react";
import axios from "axios";

import UserListTable from "./userListTable/UserListTable";

const UsersList = () => {
  // const [usersData2, setusersData2] = useState([]);

  // useEffect(() => {
  // axios
  //   .get(`http://localhost:5000/api/users`)
  //     .then((res) => setusersData2(res.data));
  // }, []);

  const [usersData, setUsersData] = useState([
    {
      _id: 1,
      username: "Team#6",
      current_balance: 15000,
      status: "active",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      _id: 2,
      username: "Mahmoud Easa",
      current_balance: 1000,
      status: "rejected",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      _id: 3,
      username: "Ahmed Rabie",
      current_balance: 1100,
      status: "pending",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      _id: 4,
      username: "Mostafa Alsadawy",
      current_balance: 1200,
      status: "active",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      _id: 5,
      username: "Mohamed Khaled",
      current_balance: 1300,
      status: "pending",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      _id: 6,
      username: "Yousef Hasan",
      current_balance: 1400,
      status: "rejected",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
  ]);

  const handleSelectChange = (e) => {
    // Copy data if there is an error, set the state again to the initial data
    const copyData = [...usersData];
    // Clone
    const allUsersData = [...usersData];
    // Edit
    allUsersData
      .filter((user) => user._id == e.target.id)
      .map((user) => (user.status = e.target.value));
    // Set State
    setUsersData(allUsersData);
  };

  return (
    <div className="container">
      <div className="pt-4 pb-2">
        <UserListTable
          usersData={usersData}
          handleSelectChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default UsersList;
