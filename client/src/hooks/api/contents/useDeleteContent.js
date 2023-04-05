import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const deleteDeleteContent = async(contentId) => {
    return await axiosInstance.delete(`/contents/delete/${contentId}`)
}

export const useDeleteContent = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(deleteDeleteContent, {
        onSuccess: () => {
            //Maybe add content to contents array
            props.navigate("/home")
        }
    })
}