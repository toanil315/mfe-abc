import React from "react";
import { RemoteAppWrapper } from "src/HOCs";
import { mount } from "app1/Module";

const AdminDashboard = () => {
  return <RemoteAppWrapper mountFunc={mount} remoteAppName={"app1"} />;
};

export default AdminDashboard;
