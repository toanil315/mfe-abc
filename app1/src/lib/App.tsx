import { Link, RouterProvider } from "react-router-dom";
import { createRouter, RoutingStrategy } from "./routes";
import { useStore } from "@nanostores/react";
import { $counter } from "store/Module";

/* eslint-disable-next-line */
export interface Props {
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}

export function App({ initialPathname, routingStrategy }: Props) {
  const counter = useStore($counter);

  return (
    <>
      <RouterProvider
        router={createRouter({ strategy: routingStrategy, initialPathname })}
      />
      Counter value: {counter}
    </>
  );
}

export default App;
