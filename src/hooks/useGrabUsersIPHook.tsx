import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserIPResponse {
  userIpAddress: string;
}

export const useUserIP = () => {
  const [userIP, setUserIP] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        const response = await axios.get<UserIPResponse>('/get-user-ip');
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