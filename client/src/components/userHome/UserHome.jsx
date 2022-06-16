import "./userHome.css";
import { Link } from "react-router-dom";
import CardAccounts from "./../../pages/userDashboard/cardAccounts/CardAccounts";

const UserHome = () => {
  return (
    <div className="container flex flex-col items-center gap-8 py-10">
      <div className="createAccountOnUser">
        <Link to="/user/createAccount">
          <button className="create-account-btn">Create Account</button>
        </Link>
      </div>
      <div className="w-full md:px-4 lg:px-20 xl:px-40">
        <CardAccounts />
      </div>
    </div>
  );
};

export default UserHome;
