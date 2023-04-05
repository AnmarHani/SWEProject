import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const postRegister = async(body) => {
    return await axiosInstance.post("/users/register", body)
}

export const useRegister = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(postRegister, {
        onSuccess: (data) => {
            axiosInstance.defaults.headers.common['Authorization'] = data.data.token
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", data.data.user);
            props.setUser(data.data.user)

            props.navigate(`/users/update`)
        }
    })
}