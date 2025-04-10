// components/About.jsx
import React from 'react'

export default function About() {
  
  return (
  <section style={styles.about}>
  <h2 style={styles.title}>About Rem Odyssey Hub</h2>
  <p style={styles.text}>
  Rem Odyssey Hub is my gift to you—a place to weave stories, sketch dreams, and share your anime heart. I’ll guide you every step. Let’s start this odyssey together!
  </p>
  </section>
  );
  }
  
  const styles = {
  about: {
  padding: '60px 20px',
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  },
  title: {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#87CEEB',
  marginBottom: '15px',
  animation: 'fadeIn 1s ease-out',
  },
  text: {
  fontSize: '16px',
  color: '#333333',
  maxWidth: '600px',
  margin: '0 auto',
  animation: 'fadeIn 1s ease-out 0.5s forwards',
  opacity: 0,
  },
  };