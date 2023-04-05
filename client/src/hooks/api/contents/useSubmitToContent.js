import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const putSubmitToContent = async(body) => {
    return await axiosInstance.put(`/contents/submit-to-content/${body.contentId}`, body.reference)
}

export const useSubmitToContent = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(putSubmitToContent, {
        onSuccess: () => {
            props.navigate("/home")
        }
    })
}