import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Vinay Kumar Reddy's Portfolio</h1>
          <p>Welcome to my portfolio landing page!</p>
        </motion.div>
      </Container>
    </>
  );
}

export default App;