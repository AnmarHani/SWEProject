import { useQuery } from "react-query";
import axiosInstance from "../../../services/axios";

const getAllUsers = async() => {
    return await axiosInstance.get('/users/')
}

export const useGetAllUsers = () => {
    // { isLoading, isError, error, data, refetch }
    // The Needed Data Must Be data.data
    return useQuery("get-all-users", getAllUsers)
}