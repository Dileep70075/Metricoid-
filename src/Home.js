import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openAccordion, setOpenAccordion] = useState(null);
  const navigate = useNavigate();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    if (selectedValue === 'about') {
      navigate('/about');
    } else if (selectedValue === 'services') {
      navigate('/services');
    }
    else if (selectedValue === 'Marketing') {
      navigate('/marketing');
    }
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const styles = {
    container: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor:'#CCE5FF'
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#2c3e50',
      marginTop: '40px',
    },
    label: {
      marginRight: '0.5rem',
      fontWeight: '600',
    },
    select: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '2rem',
      flexWrap: 'wrap',
    },
    card: {
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
      width: '250px',
      backgroundColor: '#f9f9f9',
    },
    button: {
      marginTop: '2rem',
      padding: '0.5rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 999,
    },
    cardImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '4px',
      marginBottom: '1rem',
    },
    accordionItem: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '1rem',
      padding: '1rem',
      textAlign: 'left',
      cursor: 'pointer',
    },
    accordionContent: {
      marginTop: '1rem',
      color: '#555',
    },
  };

  const cardData = [
    {
      title: 'Digital Strategy',
      text: 'Boost your brand with smart digital strategies.',
      img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Social Media',
      text: 'Engage your audience on platforms they love.',
      img: 'https://images.unsplash.com/photo-1517260911058-0fcfd733702f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'SEO Optimization',
      text: 'Rank higher on Google and grow organically.',
      img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Creative Design',
      text: 'Stand out with eye-catching visuals.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Content Marketing',
      text: 'Attract leads with valuable content.',
      img: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Email Campaigns',
      text: 'Convert customers with targeted emails.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Analytics',
      text: 'Track and analyze your marketing performance.',
      img: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div style={{...styles.container,padding:'80px'}}>
      <div style={styles.accordionItem} onClick={() => toggleAccordion(0)}>
        <strong>Content 1</strong>
        {openAccordion === 0 && (
          <div style={styles.accordionContent}>
            Digital Marketing refers to the use of digital channels, platforms, and technologies to promote products or services to consumers and businesses. It encompasses a wide range of strategies, including search engine optimization (SEO), content marketing, social media marketing, email campaigns, and pay-per-click (PPC) advertising.
          </div>
        )}
      </div>
      <div style={styles.accordionItem} onClick={() => toggleAccordion(1)}>
        <strong>Content 2</strong>
        {openAccordion === 1 && (
          <div style={styles.accordionContent}>
            With the rise of internet usage and mobile devices, digital marketing has become a crucial part of any modern business strategy, offering the ability to reach a global audience, track user engagement in real-time, and personalize messaging based on data insights.
          </div>
        )}
      </div>

      <h1 style={styles.heading}>Welcome to our website!</h1>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={styles.label}>Choose category:</label>
        <select value={selectedCategory} onChange={handleSelect} style={styles.select}>
          <option value="All">All</option>
          <option value="about">about</option>
          <option value="services">services</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2>Fast Performance</h2>
          <p>Our app is optimized for speed and reliability.</p>
        </div>
        <div style={styles.card}>
          <h2>Modern Design</h2>
          <p>Clean, responsive design with the latest UI trends.</p>
        </div>
        <div style={styles.card}>
          <h2>Easy Integration</h2>
          <p>Quickly integrate with other services and APIs.</p>
        </div>
      </div>

      <button onClick={toggleModal} style={styles.button}>
        Open Info Modal
      </button>

      {isModalOpen && (
        <>
          <div style={styles.overlay} onClick={toggleModal}></div>
          <div style={styles.modal}>
            <h2>More Information</h2>
            <p>This modal provides extra details about our services.</p>
            <button onClick={toggleModal} style={{ ...styles.button, backgroundColor: '#e74c3c' }}>
              Close
            </button>
          </div>
        </>
      )}

      <div style={styles.cardsContainer}>
        {cardData.map((card, idx) => (
          <div key={idx} style={styles.card}>
            <img src={card.img} alt={card.title} style={styles.cardImage} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button style={styles.button}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
