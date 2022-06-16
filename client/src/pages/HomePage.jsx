import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Home4 from "../components/Home4";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-primary overflow-hidden">
        <NavBar />
        <Home />
        <Home2 />
        <Home3 />
        <Home4 />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
