import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUserIP = () => {
  const [userIP, setUserIP] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        const response = await axios.get('https://GmailCloneTrimmedPackagejson-env.eba-6bumpt24.eu-west-2.elasticbeanstalk.com/get-user-ip');
        if (isMounted) {
          setUserIP(response.data.userIpAddress);
          setIsLoading(false); 
        }
      } catch (error) {
        console.error('Error fetching user IP:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { userIP, isLoading };
};