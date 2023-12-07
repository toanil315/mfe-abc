import React from "react";
import { RemoteAppWrapper } from "src/HOCs";
import { mount } from "app2/Module";

const AdminDashboard = () => {
  return <RemoteAppWrapper mountFunc={mount} remoteAppName={"app2"} />;
};

export default AdminDashboard;
