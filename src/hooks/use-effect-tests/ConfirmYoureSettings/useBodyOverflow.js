import { useEffect } from 'react';

const useBodyOverflow = () => {
  useEffect(() => {
    // Set body id when component mounts
    document.body.id = 'body-overflow';
    
    // Clean up function to reset body id when component unmounts
    return () => {
      document.body.id = 'body';
    };
  }, []); // Empty dependency array to run effect only once on mount
};

export default useBodyOverflow;
