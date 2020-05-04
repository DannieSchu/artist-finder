import React from 'react';
import Controls from '../Controls/Controls.jsx';

export default function App() {
  return (
    <Controls
      onSubmit={() => { }}
      onChange={() => { }}
      value=""
      placeholder="Enter an artist"
      buttonText="Go!" />
  );
}
