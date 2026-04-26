import React from 'react';

const ContactCard = () => {
  const contactInfo = {
    name: 'Vinay Kumar Reddy',
    email: 'vinay@example.com',
    phone: '+1234567890',
    github: 'https://github.com/vinaykumarreddy',
    leetcode: 'https://leetcode.com/vinaykumarreddy',
    linkedin: 'https://linkedin.com/in/vinaykumarreddy'
  };

  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Link is not available');
    }
  };

  return (
    <div style={styles.card}>
      <h2>{contactInfo.name}</h2>
      <p>Email: <a href={`mailto:${contactInfo.email}`} style={styles.link}>{contactInfo.email}</a></p>
      <p>Phone: <a href={`tel:${contactInfo.phone}`} style={styles.link}>{contactInfo.phone}</a></p>
      <div style={styles.links}>
        <button onClick={() => openLink(contactInfo.github)} style={styles.button} aria-label="GitHub Profile">
          GitHub
        </button>
        <button onClick={() => openLink(contactInfo.leetcode)} style={styles.button} aria-label="LeetCode Profile">
          LeetCode
        </button>
        <button onClick={() => openLink(contactInfo.linkedin)} style={styles.button} aria-label="LinkedIn Profile">
          LinkedIn
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  link: {
    color: '#0073e6',
    textDecoration: 'none'
  },
  links: {
    marginTop: '16px'
  },
  button: {
    margin: '4px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0073e6',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    outline: 'none'
  }
};

export default ContactCard;