import axiosInstance from "./axios"

export const fetchThisUser = async() => {
    try {
        const response = await axiosInstance.get("/users/me")
        return response.data.user
    }
    catch (error) {
        console.log(error)
    }
}