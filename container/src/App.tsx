import { Route, Link, Routes } from "react-router-dom";
import React, { Suspense, useRef } from "react";

const ModuleApp1 = React.lazy(() => import("./remotes/App1"));
const ModuleApp2 = React.lazy(() => import("./remotes/App2"));

export function App() {
  return (
    <>
      <Routes>
        <Route
          path="app1/*"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <ModuleApp1 />
            </Suspense>
          }
        />
        <Route
          path="app2/*"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <ModuleApp2 />
            </Suspense>
          }
        />
      </Routes>

      <Link to="app1">Access to App 1</Link>
      <Link to="app2">Access to App 2</Link>
    </>
  );
}

export default App;
