'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SplitSummary.css';

const SplitSummary = () => {
  const [summary, setSummary] = useState({});
  const [shareLink, setShareLink] = useState('');

  useEffect(() => {
    // In a real app, this data would come from the previous page or a backend
    const mockSummary = {
      Alice: 25,
      Bob: 25,
      Charlie: 25,
      David: 25
    };
    setSummary(mockSummary);
    setShareLink('https://example.com/split/abc123');
  }, []);

  return (
    <div className="split-summary">
      <h1>Split Summary</h1>
      <div className="summary-breakdown">
        <h2>Breakdown</h2>
        <ul>
          {Object.entries(summary).map(([member, amount]) => (
            <li key={member}>
              {member}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className="share-link">
        <h2>Share Link</h2>
        <p>{shareLink}</p>
      </div>
      <Link to="/home" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default SplitSummary;