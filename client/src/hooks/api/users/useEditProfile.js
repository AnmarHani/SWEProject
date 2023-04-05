import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const putEditProfile = async(body) => {
    return await axiosInstance.put(`/users/create-profile`, body)
}

export const useEditProfile = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(putEditProfile, {
        onSuccess: () => {
            props.navigate("/home")
        }
    })
}