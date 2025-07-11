import axios from "axios";

const axiosPublic =axios.create({
    baseURL:'http://localhost:5010'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;