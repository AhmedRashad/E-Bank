import "./userAccount.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Loading from "../loading/Loading";
import { URL } from "../../config";
import Transaction from "./transaction/Transaction";
import TransferMoney from "./transferMoney/TransferMoney";

const UserAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        setAccounts(res.data.accounts.filter((account) => account._id == id));
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Can't Get Data Try Again");
      });
  }, [accounts]);

  const withdraw = {
    name: "Withdraw",
    inputName: "withdraw",
    balance: accounts.map((account) => account.current_balance),
    id: accounts.map((account) => account._id),
  };
  const recharging = {
    name: "Recharging",
    inputName: "recharging",
    balance: accounts.map((account) => account.current_balance),
    id: accounts.map((account) => account._id),
  };

  return (
    <div className="container">
      <ToastContainer />
      {isLoading && <Loading />}
      {accounts.map((account) => (
        <div key={account._id}>
          {account.status == "active" && (
            <div className="flex bg-white p-8 m-4 flex-col gap-4">
              <Transaction transaction={withdraw} />
              <Transaction transaction={recharging} />
              <TransferMoney accounts={accounts} />
            </div>
          )}
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
              <div
                className={`text-lg px-3 text-center py-1 rounded-full ${
                  account.status == "active"
                    ? "bg-green-300"
                    : account.status == "pending"
                    ? "bg-yellow-300"
                    : account.status == "rejected"
                    ? "bg-red-200"
                    : "bg-inherit"
                }`}
              >
                {account.status.charAt(0).toUpperCase() +
                  account.status.slice(1)}
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
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

export default UserAccount;
