import { useState, useEffect } from "react";

const useFetchPlants = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const endpoint = `http://apimonremede.jsprod.fr/api/plants`;

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(endpoint);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetchPlants;
