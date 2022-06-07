import "./dashboardCard.css";

const DashboardCard = (props) => {
  return (
    <div className="bg-white p-2 h-20 shadow-md flex items-center">
      <div className="card-icon" style={{ backgroundColor: props.bg }}>
        {props.icon}
      </div>
      <div>
        <p className="text-gray-600">{props.title}</p>
        <h2 className="font-bold">{props.total}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
