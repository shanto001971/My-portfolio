import axios from "axios";


const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://my-portfolio-server-kohl.vercel.app',
    });
    return [axiosSecure];
};

export default useAxios;