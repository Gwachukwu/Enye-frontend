import React, { useState } from "react";

const Table = ({ profiles }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerPage] = useState(20);
  
    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfile = profiles.slice(indexOfFirstProfile, indexOfLastProfile);
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(profiles.length / profilesPerPage); i++) {
      pageNumbers.push(i);
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
      <div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Credit Card Number</th>
            <th>Credit Card Type</th>
            <th>Email</th>
            <th>Domain Name</th>
            <th>Phone number</th>
            <th>Mac address</th>
            <th>URL</th>
            <th>Username</th>
            <th>Last Login</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {profiles ? (
            currentProfile.map((profile, i) => (
              <tr key={i}>
                <td>{profiles.indexOf(profile)+1}</td>
                <td>{profile.FirstName}</td>
                <td>{profile.LastName}</td>
                <td>{profile.Gender}</td>
                <td>{profile.Latitude}</td>
                <td>{profile.Longitude}</td>
                <td>{profile.CreditCardNumber}</td>
                <td>{profile.CreditCardType}</td>
                <td>{profile.Email}</td>
                <td>{profile.DomianName}</td>
                <td>{profile.PhoneNumber}</td>
                <td>{profile.MacAddress}</td>
                <td>{profile.URL}</td>
                <td>{profile.UserName}</td>
                <td>{profile.LastLogin}</td>
                <td>{profile.PaymentMethod}</td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                currentPage === number ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => paginate(number)} className="page-link">
                <strong>{number}</strong>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Table;
