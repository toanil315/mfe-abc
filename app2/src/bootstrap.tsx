import React from "react";
import { createRoot } from "react-dom/client";
import { RoutingStrategy } from "./lib/routes";
import App from "./lib/App";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const root = createRoot(mountPoint);
  root.render(
    <App initialPathname={initialPathname} routingStrategy={routingStrategy} />
  );
};

export { mount };
