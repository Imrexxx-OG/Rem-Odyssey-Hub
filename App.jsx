// App.jsx
import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Spotlight from './components/Spotlight.jsx';
import SignUp from './components/SignUp.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Footer from './components/Footer.jsx';

function App() {
 return (
 <div style={{ minHeight: '100vh' }}>
 <Hero />
 <About />
 <Spotlight />
 <SignUp />
 <SocialLinks />
 <Footer />
 </div>
 );
}

export default App;