import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const postCreateContent = async(body) => {
    return await axiosInstance.post("/contents/create", body)
}

export const useCreateContent = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(postCreateContent, {
        onSuccess: () => {
            //Maybe add content to contents array
            props.navigate("/home")
        }
    })
}