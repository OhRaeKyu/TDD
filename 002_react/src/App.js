import React from 'react';

import Profile from './components/Profile';
import Counter from './components/Counter';

export default function App() {
  return (
    <div>
      <Profile userId="oooorx" userName="오래규" />
      <Counter />
    </div>
  );
}
