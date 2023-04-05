import { useQuery } from "react-query";
import axiosInstance from "../../../services/axios";

const getUserContents = async(userId) => {
    return await axiosInstance.get(`/contents/user-contents/${userId}`)
}

export const useGetUserContents = (userId) => {
    // { isLoading, isError, error, data, refetch }
    // The Needed Data Must Be data.data
    return useQuery("get-user-contents", () => getUserContents(userId))
}