import React from 'react';

function Account({ Name, Balance, Type }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{Name}</h3>
        <p className="account-amount">{Balance}</p>
        <p className="account-amount-description">{Type}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Account;
