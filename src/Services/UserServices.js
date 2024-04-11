import Api from "../Axios/Api";
const USER_API = "/user"

export const fetchUser = async () => {
    return await Api.get(USER_API);
}

export const fetchMedecinBySpeciality = async (specialite) => {
    return await Api.get(USER_API + `/doctors?role=doctor&specialite=${specialite}`);
}

export const fetchUserById = async (userId) => {
    return await Api.get(USER_API + '/' + userId);
}

export const addUser = async (user) => {
    return await Api.post(USER_API, user);
 }

export const deleteUser = async (userId) => {
    return await Api.delete(USER_API + '/' + userId);
}

export const editUser = (user) => {
    return Api.put(USER_API + '/' + user._id, user);
}

