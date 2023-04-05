import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const postAddPointsToUser = async(body) => {
    return await axiosInstance.post(`/users/add-points/${body.userId}`, body.points)
}

export const useAddPointsToUser = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(postAddPointsToUser, {
        onSuccess: () => {
            //Maybe add content to contents array
            props.navigate("/home")
        }
    })
}