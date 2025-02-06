// src/App.tsx
import React from "react";
import TaxDashboard from "./TaxDashboard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="p-5 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.7)]">
      <TaxDashboard />
      </div>
    </div>
  );
};

export default App;
