import React, { useState } from "react";

const EntryForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        {isVisible ? "Hide Form" : "Show Form"}
      </button>

      {/* Form (Conditionally Rendered) */}
      {isVisible && (
        <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="id" className="font-semibold">
                Enter the ID:
              </label>
              <input type="number" placeholder="ID" className="border p-2 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="value" className="font-semibold">
                Enter the Value:
              </label>
              <input type="text" placeholder="Value" className="border p-2 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="strike_difference" className="font-semibold">
                Enter the Strike Difference:
              </label>
              <input type="number" placeholder="Strike Difference" className="border p-2 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lot_size" className="font-semibold">
                Enter the Lot Size:
              </label>
              <input type="number" placeholder="Lot Size" className="border p-2 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="expiry_week" className="font-semibold">
                Enter the Expiry Week:
              </label>
              <input type="number" placeholder="Expiry Week" className="border p-2 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Enter the Name:
              </label>
              <input type="text" placeholder="Name" className="border p-2 rounded-md" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="exchange_id" className="font-semibold">
                Enter the Exchange ID:
              </label>
              <input type="number" placeholder="Exchange ID" className="border p-2 rounded-md" />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EntryForm;
