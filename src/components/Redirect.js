import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const [count, setcount] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
     const interval = setInterval(() =>{
        setcount((currentCount) => --currentCount)
     }, 1000)

     count === 0 && navigate("/login")
     return () => clearInterval(interval);
    }, [count, navigate]);
    return (
        <div>
          <p>Redirecting you in {count} seconds</p>
        </div>
    );
};

export default Redirect;
