import React from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Hero} from "./pages/Hero";
import {About} from "./pages/About";
import {Services} from "./pages/Services";
import {Team} from "./pages/Team";
import {Portfolio} from "./pages/Portfolio";
import {Contacts} from "./pages/Contacts";


function App(): React.JSX.Element {

  return (
      <div className='font-Inter flex flex-col min-h-svh max-w-[100vw]'>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path='/' element={<Hero />}></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/services' element={<Services />}></Route>
                  <Route path='/team' element={<Team />}></Route>
                  <Route path='/portfolio' element={<Portfolio />}></Route>
                  <Route path='/contacts' element={<Contacts />}></Route>
              </Route>
          </Routes>
      </div>
  )
}

export default App;
