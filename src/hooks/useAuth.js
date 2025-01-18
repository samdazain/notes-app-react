import { getAccessToken, getUserLogged, login, putAccessToken, register } from '../utils/network-data';
import { useEffect, useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            if (getAccessToken()) {
                const response = await getUserLogged();
                if (!response.error) {
                    setUser(response.data);
                    setIsAuthenticated(true);
                }
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    const handleLogin = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await login({ email, password });
            if (!response.error) {
                putAccessToken(response.data.accessToken);
                const userResponse = await getUserLogged();
                if (!userResponse.error) {
                    setUser(userResponse.data);
                    setIsAuthenticated(true);
                    return true;
                }
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        return false;
    };


    const handleRegister = async (name, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await register({ name, email, password });
            if (!response.error) {
                return true;
            } else {
                setError('Registration failed');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        return false;
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setIsAuthenticated(false);
    };

    return {
        user,
        loading,
        error,
        isAuthenticated,
        handleLogin,
        handleRegister,
        handleLogout,
    };
};

export default useAuth;