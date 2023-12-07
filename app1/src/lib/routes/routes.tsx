import {
  Outlet,
  Route,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import { NavigationManager } from "../HOC";

const routes = createRoutesFromElements(
  <Route
    path="/"
    element={
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    }
  >
    <Route path="/">
      <Route
        index
        element={
          <p>
            App 1 index page
            <Link to={"/about"}>App 1 about link</Link>
            <Link to={"/contact"}>App 1 contact link</Link>
          </p>
        }
      />
      <Route path="about" element={<p>App 1 about page</p>} />
      <Route path="contact" element={<p>App 1 contact page</p>} />
    </Route>
  </Route>
);

export default routes;
