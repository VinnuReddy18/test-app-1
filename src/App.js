import React, { Suspense, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StaticFallback from './components/StaticFallback';

// Lazy load non-critical components
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));

function App() {
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(true);

  useEffect(() => {
    // Check if JavaScript is enabled
    setIsJavaScriptEnabled(true);
  }, []);

  if (!isJavaScriptEnabled) {
    // Render static fallback if JavaScript is disabled
    return <StaticFallback />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;