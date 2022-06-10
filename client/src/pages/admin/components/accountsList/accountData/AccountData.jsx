import "./accountData.css";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AccountData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id;

  const data = location.state.accountsData.filter(
    (account) => account._id == id
  );
  const [accountsData, setAccountsData] = useState(data);

  const handleSelectChange = (e, account) => {
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
      .put(`http://localhost:5000/accounts/${account._id}`, {
        status: e.target.value,
      })
      .catch(() => {
        toast.error("Try Again");
        setAccountsData(copyData);
      });
  };

  const handleRemoveAccount = (account) => {
    axios
      .delete(`http://localhost:5000/accounts/${account._id}`)
      .then(() => {
        navigate("/admin/accounts", { replace: true });
      })
      .catch(() => toast.error("Can't Delete Try Again"));
  };

  return (
    <div className="container">
      <ToastContainer />
      {accountsData.map((account) => (
        <div key={account._id}>
          <h3 className="text-lg pl-4 pt-2 font-bold leading-6 text-gray-900">
            Personal Information
          </h3>
          <div className="flex bg-white p-8 m-4 flex-col gap-4">
            <div>
              <span className="font-bold">Name: </span>
              <span className="text-lg">{account.username}</span>
            </div>

            <div>
              <span className="font-bold">Email: </span>
              <span className="text-lg">{account.email}</span>
            </div>

            <div>
              <span className="font-bold">Phone: </span>
              <span className="text-lg">{account.phone}</span>
            </div>

            <div>
              <span className="font-bold">ID Government: </span>
              <span className="text-lg">{account.id_government}</span>
            </div>

            <div>
              <span className="font-bold">Birth Date: </span>
              <span className="text-lg">{account.birth_date}</span>
            </div>

            <div>
              <span className="font-bold">Current Job: </span>
              <span className="text-lg">{account.currentJob}</span>
            </div>

            <div>
              <span className="font-bold">Country: </span>
              <span className="text-lg">{account.country}</span>
            </div>

            <div>
              <span className="font-bold">Street address: </span>
              <span className="text-lg">{account.streetAddress}</span>
            </div>

            <div>
              <span className="font-bold">City: </span>
              <span className="text-lg">{account.city}</span>
            </div>

            <div>
              <span className="font-bold">State / Province: </span>
              <span className="text-lg">{account.stateProvince}</span>
            </div>

            <div>
              <span className="font-bold">ZIP / Postal code: </span>
              <span className="text-lg">{account.zipPostalCode}</span>
            </div>
          </div>

          <h3 className="text-lg pl-4 pt-2 font-bold leading-6 text-gray-900">
            Accounts Information
          </h3>
          <div className="flex bg-white p-8 m-4 flex-col gap-4">
            <div>
              <span className="font-bold">Account Name: </span>
              <span className="text-lg">{account.account_name}</span>
            </div>

            <div>
              <span className="font-bold">Account Number: </span>
              <span className="text-lg">{account.account_number}</span>
            </div>

            <div>
              <span className="font-bold">Balance: </span>
              <span className="text-lg">{account.current_balance}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Status: </span>

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
            </div>

            <button
              onClick={() => handleRemoveAccount(account)}
              className="create-account-btn text-2xl bg-red-400 hover:bg-red-500"
            >
              Remove Account
            </button>

            <button
              onClick={() => navigate("/admin/accounts")}
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

export default AccountData;
