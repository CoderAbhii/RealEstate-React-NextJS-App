import { commonRequest } from "./apiConfig";

const BASE_URL = "http://localhost:5000"

export const getAllProperties = async ({page, propertyType, city, bhk, priceRange}) => {
        return await commonRequest("GET", `${BASE_URL}/api/v1/get-properties`);
}

export const getPropertyDetails = async (id) => {
    return await commonRequest("GET", `${BASE_URL}/api/v1/property-detail/${id}`);
}