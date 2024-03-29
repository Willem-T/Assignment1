import { useState, useEffect } from 'react';


//pre:    
//post:   Returns the current date
function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (date.toDateString());
}

export default CurrentDate;