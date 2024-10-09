
import React,{useState} from 'react'
import './Notifications.css'

const Notifications = () => {

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
      
      const displayedCustomers = showAll ? customers : customers.slice(0, 12); 
  return (
    <div> 
    <div className="card">
    <div className="card-header">
      <h5 className="card-title">Notifications</h5>
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
  </div></div>
  )
}

export default Notifications