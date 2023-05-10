import axios,{AxiosRequestConfig} from "axios";


export const workerApi = axios.create();

export const ingredientApi = axios.create();

export const useAxios = () => {
    workerApi.interceptors.request.use((config: AxiosRequestConfig) => {

        return{
            ...config,
            baseURL: process.env.REACT_APP_WORKER_API_URL,
        };
    })
    ingredientApi.interceptors.request.use((config: AxiosRequestConfig) =>{
        return{
            ...config,
            baseURL: process.env.REACT_APP_INGREDIENT_API_URL,
        }
    })


}



