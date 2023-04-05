import { useQuery } from "react-query";
import axiosInstance from "../../../services/axios";

const getProfile = async(userId) => {
    return await axiosInstance.get(`/users/${userId}`)
}

export const useGetProfile = (userId) => {
    // { isLoading, isError, error, data, refetch }
    // The Needed Data Must Be data.data
    return useQuery("get-profile", () => getProfile(userId))
}