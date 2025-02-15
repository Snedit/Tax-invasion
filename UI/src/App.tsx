import React from "react";
import BasicTable from "./Data/BasicTable";
import EntryForm from "./EntryForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 ">
          <h1 className="text-xl font-semibold text-white">USER DASHBOARD</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Entry Form */}
          <section className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Market Entry</h2>
            </div>
            <div className="p-6">
              <EntryForm />
            </div>
          </section>

          {/* Data Table */}
          <section className="bg-white rounded-lg shadow">
            <div className="p-6">
              <BasicTable />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;