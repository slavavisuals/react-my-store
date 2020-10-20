import React from "react";

export default function Hero({children}) {
  return <div className="hero">
    <div className="banner">
      <h1>We have just opened!</h1>
      <p>Shop away</p>
      {children}
    </div>
  </div>;
}
