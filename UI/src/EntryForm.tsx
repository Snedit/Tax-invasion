import React, { useState } from "react";

const EntryForm:React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsVisible(true)}
        className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition font-semibold"
      >
        Add entry
      </button>
      
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Semi-transparent background overlay */}
          <div 
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsVisible(false)}
          />
          
          {/* Form Container */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl w-[400px] z-10">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Market Entry Form
            </h2>
            
            <form className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Value:</label>
                    <input 
                      type="text" 
                      placeholder="Enter Value" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Strike Diff:</label>
                    <input 
                      type="number" 
                      placeholder="Strike Difference" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Lot Size:</label>
                    <input 
                      type="number" 
                      placeholder="Lot Size" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Week:</label>
                    <input 
                      type="number" 
                      placeholder="Expiry Week" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Exchange ID:</label>
                    <input 
                      type="number" 
                      placeholder="Exchange ID" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Name:</label>
                    <input 
                      type="text" 
                      placeholder="Enter Name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryForm;