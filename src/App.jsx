import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { Card } from "./components/Card";

function App() {
  // console.log("Available routes:", window.location.pathname);

  let location = useLocation();
  console.log("App" + location.pathname);
  console.log();
  // console.log(HomePage);
  // console.log(Details);
  // console.log(NotFound);
  // console.log(Header);
  // console.log(NotFound);
  // console.log("-");
  // console.log("-");
  // console.log("-");

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name " element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <HomePage />
      </Main>
    </>
  );
}

export default App;
