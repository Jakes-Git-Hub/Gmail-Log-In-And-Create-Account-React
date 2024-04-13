import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUserIP = () => {
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status
    
    axios.get('http://localhost:3001/get-user-ip')
      .then((response) => {
        if (isMounted) { 
          setUserIP(response.data.userIpAddress);
        }
      })
      .catch((error) => {
        console.error('Error fetching user IP:', error);
      });
  
    return () => {
      isMounted = false; 
    };
  }, []);

  return { userIP };
};
