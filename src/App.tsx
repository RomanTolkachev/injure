import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { Portfolio } from "./pages/Portfolio";
import { Contacts } from "./pages/Contacts";

function App(): React.JSX.Element {
  return (
    <div className="flex min-h-svh max-w-[100vw] flex-col font-Inter">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
