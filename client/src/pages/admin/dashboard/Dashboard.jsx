import { Link } from "react-router-dom";
import "./dashboard.css";
import AdminSidebar from "../sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <div className="sidbar h-screen sticky top-0 left-0">
        <AdminSidebar />
      </div>
      <div className="main">
        <div className="container w-[80%] m-auto pt-10">
          <h1 className="text-3xl font-bold underline">Home</h1>
          <Link to="/createAccount">
            <button className="btn bg-indigo-600">Create Account</button>
          </Link>
          <Link to="/signin">
            <button className="btn bg-indigo-600">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
