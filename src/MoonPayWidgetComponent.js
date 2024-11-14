import React, { useState } from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const MoonPayWidgetComponent = () => {
  const [visible, setVisible] = useState(false);

  // Replace with your actual wallet address
  const walletAddress = "0x691F30bEd2775B7Ca597AF5608A231261fCcBE74";

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
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCryptoCurrencyCode="usdt"
            walletAddress={walletAddress}
            visible={visible}
            onUrlChange={(url) => console.log('URL changed:', url)}
            onLoad={() => console.log('Widget loaded')}
            onError={(error) => console.error('Widget error:', error)}
          />
        </div>
      )}
    </div>
  );
};

export default MoonPayWidgetComponent;