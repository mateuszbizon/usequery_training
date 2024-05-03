import axios from "axios";
import { API_URL } from "../constants";

export async function getProducts() {
    const { data } = await axios.get(`${API_URL}/products?limit=100`);

    return data;
}