import axios from 'axios';

const MOTORCYCLE_API_ENDPOINT = 'http://localhost:8084/motorcycle';

export const getMotorcyles = async () => {
    const response = await axios.get(MOTORCYCLE_API_ENDPOINT);
    return response.data;
}

export const saveMotorcyle = async (request) => {
    const response = await axios.post(MOTORCYCLE_API_ENDPOINT,
        {
            brand: request.motorcycle.brand,
            reference: request.motorcycle.reference,
            mileage: request.motorcycle.mileage,
            subcategory: request.motorcycle.subcategory,
            photoUrl: request.motorcycle.photoUrl,
            description: request.motorcycle.description
        });
    return response.data;
}