import "./userListTable.css";
import { Table, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi";

const UserListTable = (props) => {
  const { usersData, handleSelectChange } = props;

  const navigate = useNavigate();

  return (
    <div>
      <Table className="" hoverable={true}>
        <Table.Head className="bg-gray-200">
          <Table.HeadCell className="text-sm">Name</Table.HeadCell>
          <Table.HeadCell className="!px-2 text-center text-sm">
            Total Amount
          </Table.HeadCell>
          <Table.HeadCell className="!px-2 text-center text-sm">
            Status
          </Table.HeadCell>
          <Table.HeadCell className="!px-0"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {usersData.map((user) => (
            <Table.Row
              key={user._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell
                className="font-medium whitespace-nowrap flex items-center !px-2 gap-2
                text-gray-900 dark:text-white"
              >
                <span className="hidden md:flex">
                  <Avatar img={user.adminAvatar} rounded={true} />
                </span>
                <span className="ml-4 md:ml-0">{user.username}</span>
              </Table.Cell>
              <Table.Cell className="!px-2 text-center">
                ${user.current_balance}
              </Table.Cell>
              <Table.Cell className="!px-2 text-center">
                <div className="relative">
                  <select
                    id={user._id}
                    onChange={handleSelectChange}
                    defaultValue={user.status}
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
  );
};

export default UserListTable;
