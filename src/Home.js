import React, { useState } from 'react';
import './App.css';
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to our website!</h1>
      <p className="mb-6">This is a sample website built with React.js and Tailwind CSS.</p>

      {/* Dropdown */}
      <div className="mb-6">
        <label className="mr-2 font-medium">Choose category:</label>
        <select
          value={selectedCategory}
          onChange={handleSelect}
          className="border rounded px-3 py-1"
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded p-4 card">
          <h2 className="text-xl font-semibold mb-2">Fast Performance</h2>
          <p>Our app is optimized for speed and reliability.</p>
        </div>
        <div className="bg-white shadow rounded p-4 card">
          <h2 className="text-xl font-semibold mb-2">Modern Design</h2>
          <p>Clean, responsive design with the latest UI trends.</p>
        </div>
        <div className="bg-white shadow rounded p-4 card">
          <h2 className="text-xl font-semibold mb-2">Easy Integration</h2>
          <p>Quickly integrate with other services and APIs.</p>
        </div>
      </div>

      {/* Button to open modal */}
      <button
        onClick={toggleModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Open Info Modal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl max-w-md w-full modal">
            <h2 className="text-xl font-bold mb-4">More Information</h2>
            <p>This modal provides extra details about our services.</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
