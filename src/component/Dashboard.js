import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section>
      <h3>Dashboard</h3>
      <hr/>
      <Link to="/campaigns" >Campaigns</Link>
    </section>
  )
}

export default Dashboard;
