import React from 'react';
import { MoonPayProvider } from '@moonpay/moonpay-react';
import MoonPayWidgetComponent from './MoonPayWidgetComponent'; // Separate component for the widget

const App = () => {
  return (
    <MoonPayProvider
      apiKey="pk_test_PWr5Pa5sPtmao8CuCAWiQvECzSmY2" // Use your test API key
      debug={true} // Enable debug logs for development
    >
      <div>
        <h1>MoonPay Integration Test</h1>
        <MoonPayWidgetComponent /> {/* Render the MoonPay widget component */}
      </div>
    </MoonPayProvider>
  );
};

export default App;
