import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [year1, setYear1] = useState('');
  const [month1, setMonth1] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ year, month, year1, month1 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="year" className="block text-gray-700 text-xl font-semibold">Year</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mt-1 block w-full border-[1px] border-gray-300 rounded-md shadow-sm pl-1"
          required
        />
      </div>
      <div>
        <label htmlFor="month" className="block text-gray-700 text-xl font-semibold">Month</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="mt-1 block w-full border-[1px] border-gray-300 rounded-md shadow-sm pl-1"
          required
        />
      </div>
      <div>
        <label htmlFor="year1" className="block text-gray-700 text-xl font-semibold">Year1</label>
        <input
          type="text"
          id="year1"
          value={year1}
          onChange={(e) => setYear1(e.target.value)}
          className="mt-1 block w-full border-[1px] border-gray-300 rounded-md shadow-sm pl-1"
          required
        />
      </div>
      <div>
        <label htmlFor="month1" className="block text-gray-700 text-xl font-semibold">Month1</label>
        <input
          type="text"
          id="month1"
          value={month1}
          onChange={(e) => setMonth1(e.target.value)}
          className="mt-1 block w-full border-[1px] border-gray-300 rounded-md shadow-sm pl-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
