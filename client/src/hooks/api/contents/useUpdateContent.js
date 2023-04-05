import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const putUpdateContent = async(body) => {
    return await axiosInstance.put(`/contents/update/${body.contentId}`, body)
}

export const useUpdateContent = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(putUpdateContent, {
        onSuccess: () => {
            props.navigate("/home")
        }
    })
}