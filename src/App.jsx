import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopUser from "./components/PopUser/PopUser";
import Loader from "./components/Loader/Loader";
import { SWrapper } from "./components/Wrapper/Wrapper.styled";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <SWrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header />
        {loading ? <Loader /> : <Main />}
      </SWrapper>
    </>
  );
}

export default App;
