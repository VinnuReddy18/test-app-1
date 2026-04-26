import React from 'react';

function StaticFallback() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a static version of the portfolio page.</p>
      <section>
        <h2>Portfolio</h2>
        <p>Portfolio items will be displayed here.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Contact form is not available without JavaScript.</p>
      </section>
    </div>
  );
}

export default StaticFallback;