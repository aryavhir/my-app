import React, { useEffect, useRef } from 'react';
import './PayPalButton.css'; // Import CSS for styling

const PayPalButton = () => {
  const paypalRef = useRef();

  useEffect(() => {
    // Load PayPal script dynamically
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AVT2T2yQHiQ_mQReIC3sXsmFU3TyJURnbc83cB3Q7DzTNuwem-9sBj7UrAOXMMzQHBwP9P4N-w3vd7N3";  // Replace with your Sandbox Client ID
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        // Set up the transaction
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '5.00'  // Set the amount for your test transaction
              }
            }]
          });
        },
        // Finalize the transaction
        onApprove: (data, actions) => {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render(paypalRef.current);
    });
    document.body.appendChild(script);
  }, []);

  return (
    <div className="paypal-button-container">  {/* Add a wrapper div */}
      <div ref={paypalRef}></div>  {/* PayPal button will render here */}
    </div>
  );
}

export default PayPalButton;
