import { Route, Link, Routes } from "react-router-dom";
import React, { Suspense, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $counter } from "store/Module";

const ModuleApp1 = React.lazy(() => import("./remotes/App1"));
const ModuleApp2 = React.lazy(() => import("./remotes/App2"));

export function App() {
  const counter = useStore($counter);

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
      Counter value in container: {counter}
      <button onClick={() => $counter.set($counter.get() + 1)}>Increase</button>
    </>
  );
}

export default App;
