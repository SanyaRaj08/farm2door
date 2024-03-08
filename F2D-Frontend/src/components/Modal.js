import {React,useEffect, useState} from 'react';

const Modal = ({ closeModal }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => { 
    fetchUserInfo();
  }, []); 

  const fetchUserInfo = async () => {
    try {

      
      const response = await fetch('http://localhost:5000/api/auth/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        }, 
      });  
  
      if (response.ok) { 
        const data = await response.json();
        console.log('Received data:', data); // Add this line for debugging
        setUsername(data.name);
        setEmail(data.email);  
      } else {
        console.error('Failed to fetch user info');
      } 
    } catch (error) {
      console.error('Error fetching user info:', error);
      
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>User Profile</h2>
        <p>
        {/* Name: {info.name} */}
       {username}
        </p>
        <p>
        {/* Email: {info.mail} */}
        {email}
        </p>
      </div>
    </div>
  );
};

export default Modal;
