import React, { useState } from "react";
import data from "./data.json";

interface MarketData {
  id: number;
  value: string;
  strike_difference: number;
  lot_size: number;
  expiry_week: number;
  name: string;
  exchange_id: number;
}

const BasicTable: React.FC = () => {
  const [tableData, setTableData] = useState<MarketData[]>(data);
  const [editRowId, setEditRowId] = useState<number | null>(null);
  const [editedRow, setEditedRow] = useState<MarketData | null>(null);

  const handleEditClick = (item: MarketData) => {
    setEditRowId(item.id);
    setEditedRow({ ...item });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof MarketData) => {
    if (editedRow) {
      setEditedRow({ ...editedRow, [field]: e.target.value });
    }
  };

  const handleSave = () => {
    setTableData((prevData) =>
      prevData.map((item) => (item.id === editRowId ? { ...editedRow } as MarketData : item))
    );
    setEditRowId(null);
    setEditedRow(null);
  };

  const handleCancel = () => {
    setEditRowId(null);
    setEditedRow(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Market Data</h2>

      <div className="border border-blue-50 shadow-md rounded-md bg-white p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Value</th>
              <th className="px-4 py-2 text-left">Strike Diff</th>
              <th className="px-4 py-2 text-left">Lot Size</th>
              <th className="px-4 py-2 text-left">Expiry Week</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Exchange ID</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                {editRowId === item.id ? (
                  <>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editedRow?.value || ""}
                        onChange={(e) => handleChange(e, "value")}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={editedRow?.strike_difference || ""}
                        onChange={(e) => handleChange(e, "strike_difference")}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={editedRow?.lot_size || ""}
                        onChange={(e) => handleChange(e, "lot_size")}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={editedRow?.expiry_week || ""}
                        onChange={(e) => handleChange(e, "expiry_week")}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editedRow?.name || ""}
                        onChange={(e) => handleChange(e, "name")}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={editedRow?.exchange_id || ""}
                        onChange={(e) => handleChange(e, "exchange_id")}
                        className="border px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2 flex gap-2">
                      <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">
                        Save
                      </button>
                      <button onClick={handleCancel} className="bg-red-500 text-white px-3 py-1 rounded">
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.value}</td>
                    <td className="px-4 py-2">{item.strike_difference}</td>
                    <td className="px-4 py-2">{item.lot_size}</td>
                    <td className="px-4 py-2">{item.expiry_week}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.exchange_id}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
