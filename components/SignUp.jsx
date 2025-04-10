// components/SignUp.jsx
import React from 'react';

export default function SignUp() {
  return (
    <section id="signup" style={styles.signUp}>
      <h2 style={styles.title}>Join the Odyssey</h2>
      <p style={styles.text}>
        Tell Rem your dream—she’ll help you build it!
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe397RM3GMG8lgY6n1yke0vYM8rsGh4G97POXr15TuWhZGM7w/viewform?embedded=true"
        style={styles.form}
        title="Sign Up Form"
      >
        Loading…
      </iframe>
    </section>
  );
}

const styles = {
  signUp: {
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
    marginBottom: '30px',
    animation: 'fadeIn 1s ease-out 0.5s forwards',
    opacity: 0,
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    height: '800px', // Increased to fit the form
    margin: '0 auto',
    border: 'none',
    animation: 'fadeIn 1s ease-out 1s forwards',
    opacity: 0,
  },
};