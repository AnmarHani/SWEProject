import { useQuery } from "react-query";
import axiosInstance from "../../../services/axios";

const getLeaderboard = async() => {
    return await axiosInstance.get('/users/leaderboard')
}

export const useGetLeaderboard = () => {
    // { isLoading, isError, error, data, refetch }
    // The Needed Data Must Be data.data
    return useQuery("get-leaderboard", getLeaderboard)
}