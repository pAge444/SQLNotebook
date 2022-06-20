import React from "react";

import "./Table.css";

import SampleDate from "../../static/SampleData";

const TableData = () => {
  const DisplayData = SampleDate.map((elements) => {
    return (
      <tr key={elements.customerID}>
        {/* <td>{elements.customerID}</td> */}
        <td>{elements.companyName}</td>
        <td>{elements.contactName}</td>
        <td>{elements.contactTitle}</td>
        <td>{elements.address}</td>
        <td>{elements.city}</td>
        {/* <td>{elements.region}</td> */}
        <td>{elements.postalCode}</td>
        <td>{elements.country}</td>
        <td>{elements.phone}</td>
        {/* <td>{elements.fax}</td> */}
      </tr>
    );
  });

  return (
    <table className="sql_table">
      <thead>
        <tr>
          {/* <th>Customer ID</th> */}
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          <th>Address</th>
          <th>City</th>
          {/* <th>Region</th> */}
          <th>Postal Code</th>
          <th>Country</th>
          <th>Phone no.</th>
          {/* <th>Fax</th> */}
        </tr>
      </thead>
      <tbody>{DisplayData}</tbody>
    </table>
  );
};

export default TableData;
