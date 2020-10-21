import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "d1bfeb32-8e07-459b-ad60-554fb030c05d" }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }

}