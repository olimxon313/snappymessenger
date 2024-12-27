import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Auth = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = Cookies.get('userId');
        if (!userId) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, [navigate]);

    return children;
};

export default Auth;
