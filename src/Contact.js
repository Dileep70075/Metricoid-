import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact us</h1>
      <form>
        <input type="text" placeholder="Name" className="block p-2 mb-4" />
        <input type="email" placeholder="Email" className="block p-2 mb-4" />
        <textarea placeholder="Message" className="block p-2 mb-4"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
}

export default Contact;