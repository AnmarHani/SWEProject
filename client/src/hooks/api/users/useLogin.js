import axiosInstance from '../../../services/axios'
import { useMutation } from 'react-query'

const postLogin = async(body) => {
    return await axiosInstance.post("/users/login", body)
}

export const useLogin = (props) => {
    // { isLoading, isError, error, data, mutate }
    return useMutation(postLogin, {
        onSuccess: (data) => {
            axiosInstance.defaults.headers.common['Authorization'] = data.data.token
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", data.data.user);
            props.setUser(data.data.user)

            props.navigate("/home")
        }
    })
}