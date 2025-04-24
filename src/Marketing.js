import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MarketingCarousel() {
  const imageStyle = {
    height: '630px',
    objectFit: 'cover',
  };

  return (
    <div style={{backgroundColor:'#CCE5FF'}}>
    <div style={{ maxWidth: '800px', margin: '1px auto', padding: '52px' }}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={imageStyle}
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Digital Growth</h3>
            <p>Boost your business through online strategies.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={imageStyle}
            src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Social Media Marketing</h3>
            <p>Reach customers where they are most active.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={imageStyle}
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Analytics & Insights</h3>
            <p>Track performance and fine-tune your campaigns.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
     
      </div>
    </div>
    </div>
  );
}

export default MarketingCarousel;
