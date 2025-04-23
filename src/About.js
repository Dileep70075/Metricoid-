import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4">
      <style>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h1, h2 {
          font-family: 'Arial', sans-serif;
        }

        h1 {
          color: #2c3e50;
        }

        h2 {
          color: #34495e;
        }

        p, ul {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .list-disc {
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 10px;
        }

        .text-2xl {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .text-3xl {
          font-size: 2rem;
          font-weight: 700;
        }

        .font-semibold {
          font-weight: 600;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }
      `}</style>

      <h1 className="text-3xl font-bold mb-4">About Us - Digital Marketing</h1>
      
      <p className="mb-4">
        Digital marketing refers to the use of digital channels, platforms, and technologies to promote and advertise products and services to a wide audience. It encompasses various strategies, such as search engine optimization (SEO), social media marketing, content marketing, email marketing, and paid advertising.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Components of Digital Marketing</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Search Engine Optimization (SEO):</strong> Optimizing websites and content to rank higher on search engine results pages, driving organic traffic.</li>
        <li><strong>Social Media Marketing:</strong> Utilizing platforms like Facebook, Instagram, Twitter, and LinkedIn to engage with audiences, build brand awareness, and generate leads.</li>
        <li><strong>Content Marketing:</strong> Creating valuable and relevant content to attract and retain customers, ultimately driving profitable customer actions.</li>
        <li><strong>Email Marketing:</strong> Sending targeted emails to nurture leads, promote products/services, and build customer relationships.</li>
        <li><strong>Paid Advertising (PPC):</strong> Using platforms like Google Ads, Facebook Ads, and other paid ad services to reach a targeted audience through paid campaigns.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Benefits of Digital Marketing</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Cost-Effective:</strong> Compared to traditional marketing methods, digital marketing can be more affordable and provide a higher return on investment (ROI).</li>
        <li><strong>Global Reach:</strong> Digital marketing allows businesses to reach audiences across the globe, without geographical limitations.</li>
        <li><strong>Real-Time Feedback:</strong> With tools like analytics, digital marketing enables businesses to measure campaign performance and make adjustments in real time.</li>
        <li><strong>Personalization:</strong> Digital marketing allows businesses to tailor their messaging to specific segments, increasing the relevance and effectiveness of campaigns.</li>
        <li><strong>Increased Engagement:</strong> Social media, email marketing, and content marketing foster direct communication with customers, leading to higher engagement rates.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Digital Marketing?</h2>
      <p>
        Digital marketing provides businesses with the tools to engage with their customers directly, build relationships, and scale marketing efforts at a fraction of the cost of traditional methods. With measurable results and scalable strategies, digital marketing is a key factor in modern business success.
      </p>
    </div>
  );
}

export default About;
