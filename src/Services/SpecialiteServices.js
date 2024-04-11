import Api from "../Axios/Api";
const SPECIALITE_API = "/specialite"

export const fetchSpecialite = async () => {
    return await Api.get(SPECIALITE_API);
}
//
export const fetchSpecialiteById = async (specialiteId) => {
    return await Api.get(SPECIALITE_API + '/' + specialiteId);
}
export const deleteSpecialite = async (specialiteId) => {
    return await Api.delete(SPECIALITE_API + '/' + specialiteId);
}
export const addSpecialite = async (specialite) => {
    return await Api.post("" + SPECIALITE_API, specialite);
}
export const editSpecialite = (specialite) => {
    return Api.put(SPECIALITE_API + '/' + specialite.id, specialite);
}