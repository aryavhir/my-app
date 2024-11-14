import React, { useState } from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const MoonPayWidgetComponent = () => {
  const [visible, setVisible] = useState(false); // State to toggle widget visibility

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} MoonPay Widget
      </button>

      <MoonPayBuyWidget
        variant="overlay" // Can also be 'embedded'
        baseCurrencyCode="usd" // Fiat currency
        baseCurrencyAmount="100" // Payment amount
        defaultCurrencyCode="eth" // Cryptocurrency to purchase
        visible={visible} // Toggle widget visibility
      />
    </div>
  );
};

export default MoonPayWidgetComponent;
