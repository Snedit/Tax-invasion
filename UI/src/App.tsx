import React from "react";
import BasicTable from "./Data/BasicTable"; // ✅ Ensure the correct import path
import EntryForm from "./EntryForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
      {/* Entry Form Section */}
      <div className="mb-6 w-3/4 p-5 rounded-lg shadow-lg bg-white text-center">
        <EntryForm />
      </div>

      {/* Data Dashboard Section */}
      <div className="p-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.7)] bg-amber-50 text-black w-3/4">
        <h1 className="text-center text-3xl font-bold mb-4">Data Dashboard</h1>
        <BasicTable />
      </div>
    </div>
  );
};

export default App;
