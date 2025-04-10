// components/SocialLinks.jsx
import React from 'react'

export default function SocialLinks() {
  return (
  <section style={styles.social}>
  <h2 style={styles.title}>Follow the Journey</h2>
  <p style={styles.text}>
    Follow us (@Root__EM) on X for updates!
  </p>
  <div style={styles.links}>
    <a href="https://x.com/Root__EM" style={styles.link}>@Root__EM</a>
  </div>
  </section>
  );
  }
  
  const styles = {
  social: {
  padding: '40px 20px',
  backgroundColor: '#F5F5F5',
  textAlign: 'center',
  },
  title: {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#87CEEB',
  marginBottom: '15px',
  animation: 'fadeIn 1s ease-out',
  },
  text: {
  fontSize: '16px',
  color: '#333333',
  marginBottom: '20px',
  animation: 'fadeIn 1s ease-out 0.5s forwards',
  opacity: 0,
  },
  links: {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  },
  link: {
  color: '#87CEEB',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'color 0.3s',
  },
  };