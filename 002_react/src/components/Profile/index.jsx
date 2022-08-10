import React from 'react';

export default function index({ userId, userName }) {
  return (
    <div>
      <b>{userId}</b>
      <span>{userName}</span>
    </div>
  );
}
