import "./dashboardHome.css";
import DashboardCard from "./dashboardCard/DashboardCard";
import {
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineUserRemove,
  HiOutlineUserAdd,
} from "react-icons/hi";

const DashboardHome = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      <DashboardCard
        bg="#5f758d"
        title="Total User Accounts"
        total="0"
        icon={<HiOutlineUsers />}
      />

      <DashboardCard
        bg="#ff6346"
        title="Active Accounts"
        total="0"
        icon={<HiOutlineUserAdd />}
      />

      <DashboardCard
        bg="#ff6346"
        title="Inactive Accounts"
        total="0"
        icon={<HiOutlineUserRemove />}
      />

      <DashboardCard
        bg="#5f7bff"
        title="Active Users"
        total="0"
        icon={<HiOutlineUserAdd />}
      />

      <DashboardCard
        bg="#5f7bff"
        title="Inactive Users"
        total="0"
        icon={<HiOutlineUserRemove />}
      />

      <DashboardCard
        bg="#38b45e"
        title="Total Balance"
        total="$"
        icon={<HiOutlineCurrencyDollar />}
      />
    </div>
  );
};

export default DashboardHome;
