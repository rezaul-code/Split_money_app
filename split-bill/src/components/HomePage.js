'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const HomePage = () => {
  const [members, setMembers] = useState(['Alice', 'Bob', 'Charlie']);
  const [newMember, setNewMember] = useState('');

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMember) {
      setMembers([...members, newMember]);
      setNewMember('');
    }
  };

  return (
    <div className="home-page">
      <h1>Dashboard</h1>
      <div className="members-list">
        <h2>Members</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleAddMember} className="add-member-form">
        <input
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          placeholder="New member name"
        />
        <button type="submit">Add Member</button>
      </form>
      <Link to="/split-bill" className="split-bill-link">Split Bill</Link>
    </div>
  );
};

export default HomePage;