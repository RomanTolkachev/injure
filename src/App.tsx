import React, { useCallback, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { Portfolio } from "./pages/Portfolio";
import { Contacts } from "./pages/Contacts";
import { AnimatePresence } from "framer-motion";
import { AnimatedPageRouting } from "./components/utils/AnimatedPageRouting";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import Modal from "./components/Modal/Modal";

function App(): React.JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const background: string = location.state && location.state.background;
  const isDynamicRoute = location.pathname.startsWith("/services/");
  console.log(location);

  const memoizedLocation = useMemo(() => {
    if (isDynamicRoute) {
      return { ...location, pathname: "/services" };
    }
    return location;
  }, [isDynamicRoute, location]);

  const closeModal = useCallback(() => {
    return navigate(-1);
  }, [navigate]);
  return (
    <>
      <div className="flex min-h-svh max-w-[100vw] flex-col overflow-x-hidden font-Inter">
        <Header />
        <section className="shrink grow">
          <div className="h-[79px]"></div>
          <AnimatePresence mode="wait">
            <Routes location={memoizedLocation} key={memoizedLocation.pathname}>
              <Route
                path="/"
                element={<AnimatedPageRouting children={<Main />} />}
              />
              <Route
                path="/about"
                element={<AnimatedPageRouting children={<About />} />}
              />
              <Route
                path="/services"
                element={<AnimatedPageRouting children={<Services />} />}
              />
              <Route
                path="/team"
                element={<AnimatedPageRouting children={<Team />} />}
              />
              <Route
                path="/portfolio"
                element={<AnimatedPageRouting children={<Portfolio />} />}
              />
              <Route
                path="/contacts"
                element={<AnimatedPageRouting children={<Contacts />} />}
              />
            </Routes>
          </AnimatePresence>
        </section>
        <Footer />
      </div>
      <AnimatePresence mode="wait">
        {background && (
          <Routes location={location} key={location.pathname}>
            <Route
              path={"services/:id"}
              element={
                <Modal closeModal={closeModal} children={<div>blabla</div>} />
              }
            />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
