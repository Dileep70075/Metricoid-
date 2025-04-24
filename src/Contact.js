import React from 'react';

const Style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  
};

const Style1 = {
  width: '40%',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  borderRadius:'10px'
};

const Style2 = {
  width: '40%',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '120px',
  resize: 'vertical',
  borderRadius:'10px'
};

const Style3 = {
  backgroundColor: '#3b82f6', // Tailwind blue-500
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  border: 'none',
  marginTop: '10px',
  borderRadius:'10px'
};

function Contact() {
  return (
    <div style={{backgroundColor:'#CCE5FF',height:'730px'}} >
      <h1 style={{textAlign:'center',marginTop:'-1px', paddingTop:'60px'}}>Contact Us</h1>

      <form style={Style}>
        <input style={Style1} type="text" placeholder="Name" />
        <input style={Style1} type="email" placeholder="Email" />
        <textarea style={Style2} placeholder="Message"></textarea>
        <button
          type="submit"
          style={Style3}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
