import { useState, useEffect } from 'react';
import apiService from '@api/apiService';

const useApi = (topic, method, params = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const paramString = JSON.stringify(params);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiService[topic][method](
                    ...Object.values(paramString)
                );
                setData(res.data);
            } catch (error) {
                setError(error.response?.data?.message || '未知錯誤');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [topic, method, paramString]);

    return { data, loading, error };
};

export default useApi;
