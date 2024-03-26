import React from "react";
import Dashboard from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
};

export default Home;
