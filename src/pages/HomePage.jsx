import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import DataTable from '../components/DataTable';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async ({ year, month, year1, month1 }) => {
    try {
      // Make the API call with form data
      const response = await axios.post('https://d063-39-46-213-12.ngrok-free.app/generate-report', {
        year:year,
        month:month,
        year1:year1,
        month1:month1,
      });

      // Assuming the API response contains the data you want to display
      setData(response.data);

      // Set form submitted to true to show the data table
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