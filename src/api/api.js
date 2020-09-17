import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": process.env.REACT_APP_API_KEY}
});

export  const  userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },

    setUnfollow(u) {
        return instance.delete(`follow/${u.id}`,
        ).then(response => response.data)
    }
}
