import React, { useState } from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const MoonPayWidgetComponent = () => {
  const [visible, setVisible] = useState(false);

  // Set your wallet address here (replace with your actual wallet address)
  const walletAddress = "your_crypto_wallet_address_here";

  return (
    <div>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {visible ? 'Hide' : 'Show'} MoonPay Widget
      </button>

      {visible && (
        <div style={{ position: 'relative', zIndex: 999, marginTop: '20px' }}>
          <MoonPayBuyWidget
            variant="overlay"
            baseCurrencyCode="usd"  // User pays in USD
            baseCurrencyAmount="4"  // Amount user needs to pay (4 USD in this case)
            defaultCurrencyCode="usdt" // User buys USDT
            walletAddress={walletAddress} // Your wallet address to receive USDT
            visible={visible}
            containerStyle={{
              border: 'none',
              width: '100%',
              height: '600px'
            }}
            onUrlChange={(url) => {
              console.log('URL changed:', url);  // Track the URL changes (transaction progress)
            }}
            onLoad={() => {
              console.log('Widget loaded');  // When the widget loads
            }}
            onError={(error) => {
              console.error('Widget error:', error);  // Capture errors if any
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MoonPayWidgetComponent;
