import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserProfile({ id }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async (id) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData(id);
  }, [id]);

  if (loading) return <div>로딩중...</div>;

  if (!userData) return null;

  const { username, email } = userData;

  return (
    <div>
      <p>
        <b>Username : </b>
        {username}
      </p>
      <p>
        <b>Email : </b>
        {email}
      </p>
    </div>
  );
}
