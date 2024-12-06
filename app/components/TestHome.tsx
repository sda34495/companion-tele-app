import React from 'react'

function TestHome() {
  return (
    <div className="relative h-screen w-screen bg-gray-100 flex flex-col">
    {/* Page content */}
    <div className="flex-1 flex items-center justify-center">
      <div>
        <h1 className="text-xl font-bold text-center">Telebook</h1>
        <p className="text-center text-gray-500">As simple as messaging</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Travel date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">End date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Button */}
    <button className="absolute bottom-0 inset-x-0 bg-blue-500 text-white py-4 w-full">
      Search
    </button>
  </div>
  )
}

export default TestHome