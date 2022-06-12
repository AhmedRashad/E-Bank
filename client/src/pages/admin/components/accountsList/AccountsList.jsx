import "./accountsList.css";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { URL } from "../../../../config";
import Loading from "../../../../components/loading/Loading";

const AccountsList = () => {
  const [accountsData, setAccountsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${URL}/accounts`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        setAccountsData(res.data);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSelectChange = (e, account) => {
    setIsLoading(true);
    // Copy data if there is an error, set the state again to the initial data
    const copyData = [...accountsData];
    // Clone
    let allAccountsData = [...accountsData];
    // Edit
    let index = allAccountsData.indexOf(account);
    allAccountsData[index] = { ...allAccountsData[index] };
    allAccountsData[index].status = e.target.value;

    // Set State
    setAccountsData(allAccountsData);

    axios
      .put(
        `${URL}/accounts/${account._id}`,
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
        setAccountsData(copyData);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="container ">
      <ToastContainer />
      {isLoading && <Loading />}

      <div className="pt-4 pb-2">
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
              Status
            </Table.HeadCell>
            <Table.HeadCell className="text-center text-sm">
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {accountsData.map((account) => (
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
                <Table.Cell className="!px-2 text-center">
                  <div className="relative">
                    <select
                      id={account._id}
                      onChange={(e) => handleSelectChange(e, account)}
                      value={account.status}
                      className={`text-lg focus:outline-none focus:border-0
                      pl-3 text-center py-1 rounded-full cursor-pointer ${
                        account.status == "active"
                          ? "bg-green-300"
                          : account.status == "pending"
                          ? "bg-yellow-300"
                          : account.status == "rejected"
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
                        navigate(`${account._id}`, {
                          state: { accountsData },
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

export default AccountsList;
