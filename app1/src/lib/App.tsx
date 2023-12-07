import { Link, RouterProvider } from "react-router-dom";
import { createRouter, RoutingStrategy } from "./routes";

/* eslint-disable-next-line */
export interface Props {
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}

export function App({ initialPathname, routingStrategy }: Props) {
  return (
    <>
      <RouterProvider
        router={createRouter({ strategy: routingStrategy, initialPathname })}
      />
    </>
  );
}

export default App;
