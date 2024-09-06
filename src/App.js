import React from 'react';
import { FAQ } from './components/faq';

import './app.css';

export default function App() {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-3xl w-11/12">
        <FAQ />
      </div>
    </div>
  );
}
