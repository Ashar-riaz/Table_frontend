import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import DataTable from '../components/DataTable';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async ({ year, month, year1, month1 }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}generate-report`, {
        year:year,
        month:month,
        year1:year1,
        month1:month1,
      });

      setData(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleToggle = () => {
    setFormSubmitted(prevState => !prevState);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ENTER THE FORM FIELDS TO GET RELATED DATA</h1>
      {!formSubmitted && <InputForm onSubmit={handleFormSubmit} />}
      {formSubmitted && (
        <div>
          <DataTable data={data} />
          <button
            onClick={handleToggle}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Form
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;