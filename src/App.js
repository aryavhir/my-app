import React from 'react';
import { MoonPayProvider } from '@moonpay/moonpay-react';
import MoonPayWidgetComponent from './MoonPayWidgetComponent';

const App = () => {
  return (
    <MoonPayProvider apiKey="your_test_api_key" debug>
      <div style={{ padding: '20px' }}>
        <h1>MoonPay Payment Gateway Test</h1>
        <MoonPayWidgetComponent />
      </div>
    </MoonPayProvider>
  );
};

export default App;
