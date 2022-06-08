import "./userData.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const UserData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = useParams().id;
  const userData = location.state.usersData.filter((user) => user.id == id);
  return (
    <>
      {userData.map((user) => (
        <div key={user.id} className="container flex flex-col gap-4">
          <div>
            <span className="font-bold">Name: </span>
            <span className="text-lg">{user.username}</span>
          </div>
          <div>
            <span className="font-bold">Current Balance: </span>
            <span className="text-lg">{user.currentBalance}</span>
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
          <button
            onClick={() => navigate("/admin/users")}
            className="create-account-btn text-2xl"
          >
            Back
          </button>
        </div>
      ))}
    </>
  );
};

export default UserData;
