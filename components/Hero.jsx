// components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
  <section style={styles.hero}>
  <div style={styles.imageContainer}>
  <img
  src="https://moccasin-wrong-prawn-350.mypinata.cloud/ipfs/bafkreic6sqagkle4dfi5qrrr4xqjqdts7hbpcn2nlxuq7mm3mpghaetsem"
  alt="Chibi Rem, the Maid of Dreams"
  style={styles.remImage}
  />
  </div>
  <h1 style={styles.headline}>Rem Odyssey Hub</h1>
  <p style={styles.subHeadline}>Your Dreams Begin with Me</p>
  <p style={styles.subtext}>
  I’m Rem, your Maid of Dreams. Step into a world where creators and fans build anime magic together!
  </p>
  <a href="#signup" style={styles.cta}>
  Join Rem’s Journey
  </a>
  </section>
  );
  }
  
  const styles = {
  hero: {
  height: '100vh',
  background: 'linear-gradient(to bottom, #87CEEB, #4682B4)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#FFFFFF',
  padding: '20px',
  },
  imageContainer: {
  width: '150px',
  height: '150px',
  marginBottom: '20px',
  },
  remImage: {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  animation: 'fadeIn 1s ease-out',
  },
  headline: {
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '10px',
  animation: 'fadeIn 1s ease-out 0.5s forwards',
  opacity: 0,
  },
  subHeadline: {
  fontSize: '24px',
  marginBottom: '15px',
  animation: 'fadeIn 1s ease-out 1s forwards',
  opacity: 0,
  },
  subtext: {
  fontSize: '18px',
  maxWidth: '600px',
  marginBottom: '20px',
  animation: 'fadeIn 1s ease-out 1.5s forwards',
  opacity: 0,
  },
  cta: {
  backgroundColor: '#FFFFFF',
  color: '#87CEEB',
  padding: '12px 24px',
  borderRadius: '25px',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'background 0.3s, color 0.3s',
  animation: 'fadeIn 1s ease-out 2s forwards',
  opacity: 0,
  },
  };