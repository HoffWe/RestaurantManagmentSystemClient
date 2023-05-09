import axios, {AxiosRequestConfig} from "axios";

export const ingredientApi = axios.create();

export const useAxios = () => {
    ingredientApi.interceptors.request.use((config: AxiosRequestConfig) =>{
        return{
            ...config,
            baseURL: process.env.REACT_APP_INGREDIENT_API_URL,
        }
    })
}