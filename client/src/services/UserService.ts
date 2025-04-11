import AxiosInstance from "../AxiosInstance";

const UserService = {
    loadUser: async () => {
        return AxiosInstance.get("/loadUsers")
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
    },
    storeUser: async (data: any) => {
        return AxiosInstance.post("/storeUser", data)
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
    },
    updateUser: async (userId: number, data: any) => {
        return AxiosInstance.put(`/updateUser/${userId}`, data)
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
   },
};

export default UserService;