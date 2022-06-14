import "./usersList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

import { URL } from "../../../../config";
import Loading from "../../../../components/loading/Loading";

const UsersList = () => {
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${URL}/users`, {
        withCredentials: true,
      })
      .then((res) => {
        setUsersData(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        toast("Can't Get Data Try Again");
      });
  }, []);

  const handleSelectChange = (e, user) => {
    setIsLoading(true);
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
    console.log(user._id);
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
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Try Again");
        setUsersData(copyData);
      });
  };

  const handleTotalBalance = (user) => {
    let totalBalance = 0;
    user.accounts.map((t) => (totalBalance += t.current_balance));

    return totalBalance;
  };

  return (
    <div className="container">
      <ToastContainer />
      {isLoading && <Loading />}
      <div className="pt-4 pb-2">
        <Table hoverable={true}>
          <Table.Head className="bg-gray-200">
            <Table.HeadCell className="text-sm">Name</Table.HeadCell>
            <Table.HeadCell className="!px-2 text-center text-sm">
              Total Balance
            </Table.HeadCell>
            <Table.HeadCell className="!px-2 text-center text-sm">
              Status
            </Table.HeadCell>
            <Table.HeadCell className="text-center text-sm">
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {usersData
              .filter((user) => user.admin == false)
              .map((user) => (
                <Table.Row
                  key={user._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell
                    className="font-medium whitespace-nowrap flex items-center !px-2 gap-2
                text-gray-900 dark:text-white"
                  >
                    <span className="hidden md:flex">
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        rounded={true}
                      />
                    </span>
                    <span className="ml-4 md:ml-0">{user.name}</span>
                  </Table.Cell>
                  <Table.Cell className="!px-2 text-center">
                    ${handleTotalBalance(user)}
                  </Table.Cell>
                  <Table.Cell className="!px-2 text-center">
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
                  </Table.Cell>
                  <Table.Cell className="!px-2">
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() =>
                          navigate(`${user._id}`, {
                            state: { usersData },
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
    </div>
  );
};

export default UsersList;
