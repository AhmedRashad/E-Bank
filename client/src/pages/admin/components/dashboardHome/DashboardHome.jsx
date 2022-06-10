import "./dashboardHome.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineUserRemove,
  HiOutlineUserAdd,
} from "react-icons/hi";

import DashboardCard from "./dashboardCard/DashboardCard";

const DashboardHome = () => {
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [activeAccounts, setActiveAccounts] = useState(0);
  const [inactiveAccounts, setInactiveAccounts] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/accounts").then((res) => {
      setTotalAccounts(res.data.length);
      setActiveAccounts(res.data.filter((d) => d.status === "active").length);
      setInactiveAccounts(
        res.data.filter((d) => d.status === "pending").length
      );
      let num = 0;
      for (let i of res.data) {
        num += i.current_balance;
      }
      setTotalBalance(num);
    });
  }, []);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      <DashboardCard
        bg="#5f758d"
        title="Total Users"
        total={totalUsers}
        icon={<HiOutlineUsers />}
      />

      <DashboardCard
        bg="#5f758d"
        title="Total Accounts"
        total={totalAccounts}
        icon={<HiOutlineUsers />}
      />

      <DashboardCard
        bg="#38b45e"
        title="Total Balance"
        total={`$${totalBalance}`}
        icon={<HiOutlineCurrencyDollar />}
      />

      <DashboardCard
        bg="#ff6346"
        title="Active Accounts"
        total={activeAccounts}
        icon={<HiOutlineUserAdd />}
      />

      <DashboardCard
        bg="#ff6346"
        title="Inactive Accounts"
        total={inactiveAccounts}
        icon={<HiOutlineUserRemove />}
      />

      <DashboardCard
        bg="#5f7bff"
        title="Active Users"
        total={activeUsers}
        icon={<HiOutlineUserAdd />}
      />

      <DashboardCard
        bg="#5f7bff"
        title="Inactive Users"
        total={inactiveUsers}
        icon={<HiOutlineUserRemove />}
      />
    </div>
  );
};

export default DashboardHome;
