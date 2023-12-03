import { categoryApiUrl } from '../common/const';

export const getOneCategory = async (id = 0) => {
    try {
        const response = await fetch(`${categoryApiUrl}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
};
