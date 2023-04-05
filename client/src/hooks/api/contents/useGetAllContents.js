import { useQuery } from "react-query";
import axiosInstance from "../../../services/axios";

const getAllContents = async() => {
    return await axiosInstance.get('/contents')
}

export const useGetAllContents = () => {
    // { isLoading, isError, error, data, refetch }
    // The Needed Data Must Be data.data
    return useQuery("get-all-contents", getAllContents)
}