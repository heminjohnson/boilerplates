/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./components/NotFound";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

const App: FunctionComponent = () => {

  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
              <DashboardPage name={'test user'} email={'test@test.com'} googleId={'googleId'} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
