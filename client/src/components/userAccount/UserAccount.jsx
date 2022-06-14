import "./userAccount.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import Transaction from "./transaction/Transaction";
import TransferMoney from "./transferMoney/TransferMoney";

const UserAccount = ({ accounts }) => {
  const id = useParams().id;
  const navigate = useNavigate();

  const account = accounts.filter((account) => account._id == id);

  const withdraw = {
    name: "Withdraw",
    inputName: "withdraw",
    balance: account[0].current_balance,
    id: account[0]._id,
  };
  const recharging = {
    name: "Recharging",
    inputName: "recharging",
    balance: account[0].current_balance,
    id: account[0]._id,
  };

  const current_balance = account[0].current_balance;

  return (
    <div className="container">
      {account.map((account) => (
        <div key={account._id}>
          {account.status == "active" && (
            <div className="flex m-4 flex-col gap-4">
              <div className="flex flex-col gap-4 md:gap-10 md:flex-row">
                <div className="flex-1">
                  <h3 className="text-lg py-2 font-bold leading-6 text-gray-900">
                    Withdraw Money
                  </h3>
                  <Transaction transaction={withdraw} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg py-2 font-bold leading-6 text-gray-900">
                    Recharging Money
                  </h3>
                  <Transaction transaction={recharging} />
                </div>
              </div>
              <div className="current-balance">
                <h3 className="text-lg py-2 font-bold leading-6 text-gray-900">
                  Transfer Money
                </h3>
                <TransferMoney current_balance={current_balance} />
              </div>
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
