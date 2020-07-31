import React from 'react';
import Button from 'react-bootstrap/Button';

const Campaign = ({ camp, handleNameClick, handleDelete }) => {
  return(
    <tr>
      <td  className={camp.status === "Preview" ? "camp" : ''}onClick={() => camp.status === "Preview" && handleNameClick(camp.name)}>{camp.name}</td>
      <td>{camp.status}</td>
      {camp.status === "Preview" && 
      <td>
        <Button variant="primary" onClick={() => handleNameClick(camp.name)}>Edit</Button>
        <Button variant="primary" onClick={() => handleDelete(camp.id)}>Delete</Button>
      </td>}
      {camp.stats && <td>{camp.stats.sent}</td>}
      {camp.stats && <td>{camp.stats.clicked}</td>}
    </tr>
  )
}

export default Campaign;
