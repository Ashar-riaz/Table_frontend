import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <div className="max-h-[900px] h-[456px] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(data[0] || {}).map((key, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                {Object.values(item).map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
