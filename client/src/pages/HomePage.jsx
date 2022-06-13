import { useEffect } from "react";
import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Footer from "../components/Footer";

const HomePage = () => {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.admin) {
      navigate("/admin/dashboard");
    } else if (user.admin === false) {
      navigate("/user/dashboard");
    }
  }, [user]);

  return (
    <>
      {!user && (
        <>
          <NavBar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};
export default HomePage;
