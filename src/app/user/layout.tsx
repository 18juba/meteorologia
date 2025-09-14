import React from "react";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
