'use client'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplitBill.css';

const SplitBillForm = () => {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const navigate = useNavigate();

  // Mock members data (in a real app, this would come from a backend or global state)
  const members = ['Alice', 'Bob', 'Charlie', 'David'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bill split:', { itemName, amount, selectedMembers });
    navigate('/split-summary');
  };

  const handleMemberToggle = (member) => {
    setSelectedMembers(prev =>
      prev.includes(member)
        ? prev.filter(m => m !== member)
        : [...prev, member]
    );
  };

  return (
    <div className="split-bill-form">
      <h1>Split Bill</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item name"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Total amount"
          required
        />
        <div className="member-selection">
          <h2>Select Members</h2>
          {members.map(member => (
            <label key={member}>
              <input
                type="checkbox"
                checked={selectedMembers.includes(member)}
                onChange={() => handleMemberToggle(member)}
              />
              {member}
            </label>
          ))}
        </div>
        <button type="submit">Split Bill</button>
      </form>
    </div>
  );
};

export default SplitBillForm;