import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopUser from "./components/PopUser/PopUser";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header />
        {loading ? <Loader /> : <Main />}
      </div>
    </>
  );
}

export default App;
