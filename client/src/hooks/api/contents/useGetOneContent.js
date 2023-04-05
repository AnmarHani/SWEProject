import { useQuery } from "react-query";
import axiosInstance from "../../../services/axios";

const getOneContent = async(contentId) => {
    return await axiosInstance.get(`/contents/${contentId}`)
}

export const useGetOneContent = (contentId) => {
    // { isLoading, isError, error, data, refetch }
    // The Needed Data Must Be data.data
    return useQuery("get-one-content", () => getOneContent(contentId))
}