import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const styles = {
    header: {
      backgroundColor: '#2c3e50',
      position:'fixed',
      width:'100%',
      color: 'white',
      height:"50px",
      fontSize:'30px',
      textAlign: 'center',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      gap: '1.5rem',
      padding: 0,
      margin: 0,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/services" style={styles.link}>Services</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
