import "./userData.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const UserData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id;
  const userData = location.state.usersData.filter((user) => user._id == id);
  return (
    <div className="container">
      {userData.map((user) => (
        <div key={user._id}>
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

            <div>
              <span className="font-bold">Status: </span>
              <span
                className={`text-lg px-3 py-1 rounded-full cursor-pointer ${
                  user.status == "active"
                    ? "bg-green-300"
                    : user.status == "pending"
                    ? "bg-yellow-300"
                    : "bg-red-200"
                }`}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </span>
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
              <span className="text-lg">{user.work}</span>
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
              <span className="text-lg">{userData.length}</span>
            </div>

            <div>
              <span className="font-bold">Active Accounts: </span>
              <span className="text-lg">
                {userData.filter((user) => user.status == "active").length}
              </span>
            </div>

            <div>
              <span className="font-bold">Inactive Accounts: </span>
              <span className="text-lg">
                {userData.filter((user) => user.status == "pending").length}
              </span>
            </div>

            <div>
              <span className="font-bold">Rejected Accounts: </span>
              <span className="text-lg">
                {userData.filter((user) => user.status == "rejected").length}
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
