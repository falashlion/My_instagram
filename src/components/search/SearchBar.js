import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = () => {
  // Define state for customer data
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Neil Sims', email: 'email@windster.com', imageUrl: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Neil Sims', email: 'email@windster.com', amount: '$320', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bonnie Green', email: 'email@windster.com', amount: '$3467', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Michael Gough', email: 'email@windster.com', amount: '$67', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Lana Byrd', email: 'email@windster.com', amount: '$367', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Thomas Lean', email: 'email@windster.com', amount: '$2367', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jane Doe', email: 'email@windster.com', amount: '$500', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'John Smith', email: 'email@windster.com', amount: '$230', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Alice Blue', email: 'email@windster.com', amount: '$1230', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Bob Brown', email: 'email@windster.com', amount: '$40', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Charlie White', email: 'email@windster.com', amount: '$120', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Sally Green', email: 'email@windster.com', amount: '$2000', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Mark Black', email: 'email@windster.com', amount: '$550', imageUrl: 'https://via.placeholder.com/150'}
  ]);

  const [showAll, setShowAll] = useState(false);

  // Toggle function to show all customers
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  
  const displayedCustomers = showAll ? customers : customers.slice(0, 10);

  return (
    <div>
      <form className="form-container">   
        <label htmlFor="default-search" className="label">Search</label>
        <div className="relative-container">
          <div className="icon-container">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="input-field" placeholder="Search all" required />
          <button type="submit" className="submit-btn">Search</button>
        </div>
      </form>

      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Followers</h5>
          <a href="#" className="card-link" onClick={toggleShowAll}>
            {showAll ? 'Show less' : 'View all'}
          </a>
        </div>
        <div className="list-container">
          <ul role="list" className="customer-list">
            {displayedCustomers.map((customer) => (
              <li key={customer.id} className="customer-item">
                <div className="flex-container">
                  <img className="profile-pic" src={customer.imageUrl} alt={`${customer.name} image`} />
                  <div className="customer-info">
                    <p className="customer-name">{customer.name}</p>
                    <p className="customer-email">{customer.email}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
