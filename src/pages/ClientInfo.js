import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for clients
const mockClients = [
  { id: 1, name: 'John Doe', creationDate: '2024-01-15', coordinator: 'Alice' },
  { id: 2, name: 'Jane Smith', creationDate: '2024-02-20', coordinator: 'Bob' },
  { id: 3, name: 'Carlos Garcia', creationDate: '2024-03-10', coordinator: 'Charlie' },
  { id: 4, name: 'Maria Lopez', creationDate: '2024-04-05', coordinator: 'Alice' },
  { id: 5, name: 'Sofia Rodriguez', creationDate: '2024-05-22', coordinator: 'Bob' },
];

const ClientInfo = () => {
  const [search, setSearch] = useState('');
  const [filteredClients, setFilteredClients] = useState(mockClients);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter clients based on the search input (name, date, or coordinator)
    const filtered = mockClients.filter((client) =>
      client.name.toLowerCase().includes(value.toLowerCase()) ||
      client.creationDate.includes(value) ||
      client.coordinator.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredClients(filtered);
  };

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="client-info-page">
      <h1>Client Information</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, date, or coordinator"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Creation Date</th>
              <th>Coordinator</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.creationDate}</td>
                  <td>{client.coordinator}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No clients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button>Next</button>
        <button onClick={handleReturn}>Return to Home</button>
      </div>
    </div>
  );
};

export default ClientInfo;
