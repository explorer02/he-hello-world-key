import React from 'react';
import { FAQ } from './components/faq';

export default function App() {
  return (
    <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '90%', maxWidth: '800px' }}>
        <FAQ />
      </div>
    </div>
  );
}
