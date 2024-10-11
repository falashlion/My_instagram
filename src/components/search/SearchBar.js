import React, { useState, useEffect } from 'react';
import './searchBar.css';
import useSearchUsers from '../../hooks/search/useSearchUsers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { users, loading, error } = useSearchUsers(searchTerm);
  const [customers, setCustomers] = useState(users);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setCustomers(users);
  }, [users]);

  // Toggle function to show all customers
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

// console.log(customers);
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle form submission or button click
  const handleSearch = (e) => {
    e.preventDefault();
    // setSearchTerm(e.target.value);
  };
  
  const displayedCustomers = showAll ? customers : customers.slice(0, 10);

  return (
    <div>
      <form onSubmit={handleSearch} className="form-container">   
        <label htmlFor="default-search" className="label">Search</label>
        <div className="relative-container">
          <div className="icon-container">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="input-field" placeholder="Search all" value={searchTerm} onChange={handleInputChange}  required />
          <button type="submit" className="submit-btn">Search</button>
        </div>
      </form>

      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Results</h5>
          <a href="#" className="card-link" onClick={toggleShowAll}>
            {showAll ? 'Show less' : 'View all'}
          </a>
        </div>
        <div className="list-container">
        {users.length === 0 ? (
            <div className="card-body">
              <p>No results found.</p>
            </div>
          ) : (
          <ul role="list" className="customer-list">
            {displayedCustomers.map((customer) => (
              <li key={customer.id} className="customer-item">
                <div className="flex-container">
                  <img className="profile-pic" src={customer?.avatar || "https://via.placeholder.com/100"} alt={`${customer?.username} image`} />
                  <div className="customer-info">
                    <p className="customer-name">{customer?.name}</p>
                    <p className="customer-email">{customer?.email}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
