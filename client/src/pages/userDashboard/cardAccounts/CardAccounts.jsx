import "./cardAccounts.css";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const CardAccounts = ({ accounts }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <h5
          className="text-lg text-center bg-gray-300 py-2 rounded-lg
            sm:text-xl font-bold text-gray-900 dark:text-white"
        >
          Accounts
        </h5>
        <div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {accounts.map((account) => (
              <li
                onClick={() => navigate(`${account._id}`)}
                key={account._id}
                className="py-3 cursor-pointer hover:bg-gray-200 px-4 rounded-xl sm:py-4"
              >
                <div
                  className="flex flex-col gap-2 sm:flex-row
                      sm:items-center sm:space-x-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {account.account_name}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {account.email}
                    </p>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
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
                    <div
                      className="inline-flex items-center text-base font-semibold
                  text-gray-900 dark:text-white"
                    >
                      ${account.current_balance}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
};

export default CardAccounts;
