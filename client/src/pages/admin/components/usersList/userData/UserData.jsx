import "./userData.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

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
      .patch(`http://localhost:5000/api/users/${user._id}`, {
        status: e.target.value,
      })
      .catch(() => {
        toast.error("Try Again");
        setUsersData(copyData);
      });
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
              <span className="text-lg">{user.username}</span>
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

            <div>
              <span className="font-bold">ID Government: </span>
              <span className="text-lg">{user.id_government}</span>
            </div>

            <div>
              <span className="font-bold">Birth Date: </span>
              <span className="text-lg">{user.birth_date}</span>
            </div>

            <div>
              <span className="font-bold">Current Job: </span>
              <span className="text-lg">{user.currentJob}</span>
            </div>

            <div>
              <span className="font-bold">Country: </span>
              <span className="text-lg">{user.country}</span>
            </div>

            <div>
              <span className="font-bold">Street address: </span>
              <span className="text-lg">{user.streetAddress}</span>
            </div>

            <div>
              <span className="font-bold">City: </span>
              <span className="text-lg">{user.city}</span>
            </div>

            <div>
              <span className="font-bold">State / Province: </span>
              <span className="text-lg">{user.stateProvince}</span>
            </div>

            <div>
              <span className="font-bold">ZIP / Postal code: </span>
              <span className="text-lg">{user.zipPostalCode}</span>
            </div>
          </div>

          <h3 className="text-lg pl-4 pt-2 font-bold leading-6 text-gray-900">
            Accounts Information
          </h3>
          <div className="flex bg-white p-8 m-4 flex-col gap-4">
            <div>
              <span className="font-bold">Total Accounts: </span>
              <span className="text-lg">{usersData.length}</span>
            </div>

            <div>
              <span className="font-bold">Active Accounts: </span>
              <span className="text-lg">
                {usersData.filter((user) => user.status == "active").length}
              </span>
            </div>

            <div>
              <span className="font-bold">Pending Accounts: </span>
              <span className="text-lg">
                {usersData.filter((user) => user.status == "pending").length}
              </span>
            </div>

            <div>
              <span className="font-bold">Rejected Accounts: </span>
              <span className="text-lg">
                {usersData.filter((user) => user.status == "rejected").length}
              </span>
            </div>

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
