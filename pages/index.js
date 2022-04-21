import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Technologies from "./Components/Techonologies";
import Devinfo from "./Components/DevInfo";
import Wagmi from "./Components/Web3/wagmi";

const Home = () => {
  return (
    <div>
      <Header />
      <Wagmi />
      <Intro />
      <Technologies />
      <Devinfo />
      <Footer />
    </div>
  );
};

export default Home;
