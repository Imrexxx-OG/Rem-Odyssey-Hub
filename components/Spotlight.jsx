// components/Spotlight.jsx
import React from 'react'

export default function Spotlight() {
  return (
  <section style={styles.spotlight}>
  <h2 style={styles.title}>Rem’s Spotlight</h2>
  <div style={styles.content}>
  <h3 style={styles.storyTitle}>Rem’s Forgotten Promise</h3>
  <p style={styles.storyText}>
  Rem stood under the moonlit sky, her lantern flickering. She whispered, “I’ll never forget you,” but the wind carried her words away. What promise did she make? Share your version!
  </p>
  </div>
  </section>
  );
  }
  
  const styles = {
  spotlight: {
  padding: '60px 20px',
  backgroundColor: '#F5F5F5',
  textAlign: 'center',
  },
  title: {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#87CEEB',
  marginBottom: '15px',
  animation: 'fadeIn 1s ease-out',
  },
  content: {
  maxWidth: '600px',
  margin: '0 auto',
  },
  storyTitle: {
  fontSize: '20px',
  fontWeight: '600',
  color: '#333333',
  marginBottom: '10px',
  animation: 'fadeIn 1s ease-out 0.5s forwards',
  opacity: 0,
  },
  storyText: {
  fontSize: '16px',
  color: '#333333',
  animation: 'fadeIn 1s ease-out 1s forwards',
  opacity: 0,
  },
  };