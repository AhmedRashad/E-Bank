import "./usersList.css";
import { useState } from "react";
import { Pagination } from "flowbite-react";

import UserListTable from "./userListTable/UserListTable";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [usersData, setUsersData] = useState([
    {
      id: 1,
      username: "Team#6",
      currentBalance: 15000,
      status: "active",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 2,
      username: "Mahmoud Easa",
      currentBalance: 1000,
      status: "rejected",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 3,
      username: "Ahmed Rabie",
      currentBalance: 1100,
      status: "pending",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 4,
      username: "Mostafa Alsadawy",
      currentBalance: 1200,
      status: "active",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 5,
      username: "Mohamed Khaled",
      currentBalance: 1300,
      status: "pending",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 6,
      username: "Yousef Hasan",
      currentBalance: 1400,
      status: "rejected",
      adminAvatar:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
  ]);

  const onPageChange = (e) => {
    setCurrentPage(e);
  };

  const handleSelectChange = (e) => {
    // Copy data if there is an error, set the state again to the initial data
    const copyData = [...usersData];
    // Clone
    const allUsersData = [...usersData];
    // Edit
    allUsersData
      .filter((user) => user.id == e.target.id)
      .map((user) => (user.status = e.target.value));
    // Set State
    setUsersData(allUsersData);
  };

  return (
    <div className="container">
      <div className="px-4 flex justify-center">
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          showIcons={true}
          totalPages={100}
        />
      </div>
      <div className="pt-4 pb-2">
        <UserListTable
          usersData={usersData}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <div className="px-4 flex justify-center">
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          showIcons={true}
          totalPages={100}
        />
      </div>
    </div>
  );
};

export default UsersList;
