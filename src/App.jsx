import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Containers/Navbar";
import Main from "./Containers/Homepage";
import ContactsPage from "./Containers/ContactsPage";
import DemoColors from "./demoColors";

const NAVBAR_HEIGHT = "120px";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState("home");

  function updateCounter(num, adjustment) {
    adjustment = adjustment ? adjustment > 0 : 1;
    return num + adjustment;
  }

  useEffect(() => {
    if (loading) {
      let interval = Math.floor(Math.random() * 75 + 1);
      let adjustment = Math.floor((Math.random() * 10) / 1.5);

      setTimeout(() => {
        if (counter < 100) {
          let newCounter = updateCounter(counter, adjustment);
          setCounter(newCounter);
        } else {
          setLoading(!loading);
        }
      }, interval);
    }
  });

  useEffect(() => {
    if (!loading) {
      console.log("loading finished");
    }
  }, [loading]);

  return (
    <>
      <Navbar
        loading={loading}
        NAVBAR_HEIGHT={NAVBAR_HEIGHT}
        setActivePage={setActivePage}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main loading={loading} counter={counter} activePage={activePage} />
          }
        />
        <Route path="contacts" element={<Main activePage={activePage} />} />

        <Route path="demo-color" element={<DemoColors />} />
      </Routes>
    </>
  );
};

export default App;
