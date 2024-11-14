import React from 'react';
import { MoonPayProvider } from '@moonpay/moonpay-react';
import MoonPayWidgetComponent from './MoonPayWidgetComponent'; // Separate component for the widget

const App = () => {
  return (
    <MoonPayProvider
    apiKey="pk_test_PWr5Pa5sPtmao8CuCAWiQvECzSmY2"
    debug
>
      <div>
        <h1>MoonPay Integration Test</h1>
        <MoonPayWidgetComponent /> 
      </div>
    </MoonPayProvider>
  );
};

export default App;
