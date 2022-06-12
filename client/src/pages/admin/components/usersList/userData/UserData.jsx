import "./userData.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Table } from "flowbite-react";
import { HiEye } from "react-icons/hi";

import { URL } from "../../../../../config";

const UserData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id;

  const data = location.state.usersData.filter((user) => user._id == id);

  const [usersData, setUsersData] = useState(data);

  const handleSelectChange = (e, user) => {
    // Copy data if there is an error, set the state again to the initial data
    const copyData = [...usersData];
    // Clone
    let allUsersData = [...usersData];
    // Edit
    let index = allUsersData.indexOf(user);
    allUsersData[index] = { ...allUsersData[index] };
    allUsersData[index].status = e.target.value;

    // Set State
    setUsersData(allUsersData);

    axios
      .put(
        `${URL}/users/${user._id}`,
        {
          status: e.target.value,
        },
        {
          withCredentials: true,
        }
      )
      .catch(() => {
        toast.error("Try Again");
        setUsersData(copyData);
      });
  };

  const handleRemoveUser = (user) => {
    axios
      .delete(`${URL}/users/${user._id}`, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/admin/users", { replace: true });
      })
      .catch(() => toast.error("Can't Delete Try Again"));
  };

  return (
    <div className="container">
      {usersData.map((user) => (
        <div key={user._id}>
          <ToastContainer />
          <h3 className="text-lg pl-4 pt-2 font-bold leading-6 text-gray-900">
            Personal Information
          </h3>
          <div className="flex bg-white p-8 m-4 flex-col gap-4">
            <div>
              <span className="font-bold">Name: </span>
              <span className="text-lg">{user.name}</span>
            </div>

            <div>
              <span className="font-bold">Email: </span>
              <span className="text-lg">{user.email}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Status: </span>

              <div className="relative">
                <select
                  id={user._id}
                  onChange={(e) => handleSelectChange(e, user)}
                  value={user.status}
                  className={`text-lg focus:outline-none focus:border-0
                      pl-3 text-center py-1 rounded-full cursor-pointer ${
                        user.status == "active"
                          ? "bg-green-300"
                          : user.status == "pending"
                          ? "bg-yellow-300"
                          : user.status == "rejected"
                          ? "bg-red-200"
                          : "bg-inherit"
                      }`}
                >
                  <option value="active">Active</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <div>
              <span className="font-bold">Phone: </span>
              <span className="text-lg">{user.phone}</span>
            </div>
          </div>

          <h3 className="text-lg pl-4 pt-2 font-bold leading-6 text-gray-900">
            Accounts Information
          </h3>

          <div className="flex bg-white p-8 m-4 flex-col gap-4">
            <div className="pt-4 pb-2">
              <ToastContainer />
              <Table hoverable={true}>
                <Table.Head className="bg-gray-200">
                  <Table.HeadCell className="text-sm">Name</Table.HeadCell>
                  <Table.HeadCell className="text-sm text-center">
                    Account Name
                  </Table.HeadCell>
                  <Table.HeadCell className="text-center text-sm">
                    Balance
                  </Table.HeadCell>
                  <Table.HeadCell className="text-center text-sm">
                    Action
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {user.accounts.map((account) => (
                    <Table.Row
                      key={account._id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell
                        className="font-medium whitespace-nowrap !px-2
                      text-gray-900 dark:text-white"
                      >
                        <span className="ml-4">{account.username}</span>
                      </Table.Cell>

                      <Table.Cell className="!px-2 text-center">
                        {account.account_name}
                      </Table.Cell>

                      <Table.Cell className="!px-2 text-center">
                        ${account.current_balance}
                      </Table.Cell>

                      <Table.Cell className="!px-2">
                        <div className="flex justify-center items-center">
                          <button
                            onClick={() =>
                              navigate(`${account._id}`, {
                                state: {
                                  accountsData: user.accounts,
                                  id: user._id,
                                },
                              })
                            }
                            className="create-account-btn flex gap-1 items-center px-3 py-1 rounded-full"
                          >
                            <HiEye className="text-lg" />
                            <span>View</span>
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>

            <button
              onClick={() => handleRemoveUser(user)}
              className="create-account-btn text-2xl !bg-red-400 hover:!bg-red-500"
            >
              Remove User
            </button>

            <button
              onClick={() => navigate("/admin/users")}
              className="create-account-btn text-2xl"
            >
              Back
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserData;
