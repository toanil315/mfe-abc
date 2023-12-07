import {
  createRoutesFromElements,
  Outlet,
  Route,
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
            App 2 index page
            <Link to={"/about"}>App 2 about link</Link>
            <Link to={"/contact"}>App 2 contact link</Link>
          </p>
        }
      />
      <Route path="about" element={<p>App 2 about page</p>} />
      <Route path="contact" element={<p>App 2 contact page</p>} />
    </Route>
  </Route>
);

export default routes;
