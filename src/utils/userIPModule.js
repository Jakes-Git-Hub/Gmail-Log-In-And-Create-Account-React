import { useEffect, useState } from 'react';
import axios from 'axios';

let userIP = '';

export const useUserIP = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/get-user-ip')
      .then((response) => {
        userIP = response.data.userIpAddress;
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user IP:', error);
        setLoading(false);
      });
  }, []);

  return { userIP, loading };
};
