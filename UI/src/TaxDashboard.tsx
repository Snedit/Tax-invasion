import React, { useEffect, useState } from "react";
import { OptionData } from "./types";
import rawData from "./Data/data.json";

const TaxDashBoard: React.FC = () => {
  const [data, setData] = useState<OptionData | null>(null);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState<OptionData | null>(null);

  useEffect(() => {
    setData(rawData);
    setEditedData(rawData);
  }, []);
  const dataKey: { [key in keyof OptionData]: string } = {
    "id": "ID",
    "value": "Value",
    "strike_difference": "Strike Difference",
    "lot_size": "Lot Size",
    "expiry_week": "Expiry Week",
    "name": "Name",
    "exchange_id": "Exchange ID",

  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedData) {
      setEditedData({
        ...editedData,
        [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (editedData) {
      setData(editedData);
      setEditing(false);
    }
  };

  if (!data) {
    return <p className="text-white text-center">Loading data...</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.7)]">

      <h2 className="text-xl font-bold mb-4">Data Dashboard</h2>

      {editing ? (
        <div className="flex flex-col gap-2">
          {Object.entries(editedData || {}).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <label className="font-semibold">{dataKey[key as keyof OptionData]}:</label>
              <input
                className="border p-1 rounded text-white margin-left text-center width"
                type={typeof value === "number" ? "number" : "text"}
                name={key}
                value={value as string | number | readonly string[] | undefined}
                onChange={handleChange}
              />
            </div>
          ))}
          <button className="mt-4 bg-green-500 px-3 py-1 rounded" onClick={handleSave}>
            Save
          </button>
          <button className="mt-2 bg-red-500 px-3 py-1 rounded" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              <span className="font-semibold">{dataKey[key as keyof OptionData]}</span>: {value as React.ReactNode}
            </p>
          ))}
          <button className="mt-4 bg-blue-500 px-3 py-1 rounded" onClick={() => setEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};


export default TaxDashBoard;
