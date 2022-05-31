import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="container w-[80%] m-auto pt-10">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Link to="/createAccount">
        <button className="btn">Create Account</button>
      </Link>
    </div>
  );
};

export default Home;
