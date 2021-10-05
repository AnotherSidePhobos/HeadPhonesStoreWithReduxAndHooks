import axios from "axios"

export const fetchAllItemsApi = () => {
    return axios.get(`http://localhost:3002/productItems`)
    .then((response) => response.data)
}