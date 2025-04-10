// components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
  <footer style={styles.footer}>
  <p style={styles.text}>
  © 2025 Rem Odyssey Hub | Crafted with Rem’s Care
  </p>
  </footer>
  );
  }
  
  const styles = {
  footer: {
  padding: '20px',
  backgroundColor: '#87CEEB',
  textAlign: 'center',
  color: '#FFFFFF',
  },
  text: {
  fontSize: '14px',
  },
  };