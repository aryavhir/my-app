import React, { useState } from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const MoonPayWidgetComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} MoonPay Widget
      </button>

      <div style={{ position: 'relative', zIndex: 999 }}>
        <MoonPayBuyWidget
          variant="overlay"
          baseCurrencyCode="usd"
          baseCurrencyAmount="100"
          defaultCurrencyCode="eth"
          visible={visible}
          // Add these specific iframe settings
          containerStyle={{
            border: 'none',
            width: '100%',
            height: '600px',
            allowTransparency: true
          }}
          // Important: Add these sandbox permissions
          iframeParameters={{
            allow: "accelerometer; autoplay; camera; gyroscope; payment",
            sandbox: "allow-forms allow-scripts allow-same-origin allow-popups allow-modals allow-top-navigation-by-user-activation"
          }}
        />
      </div>
    </div>
  );
};

export default MoonPayWidgetComponent;