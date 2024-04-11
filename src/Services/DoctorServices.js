import Api from "../Axios/Api";
const MEDECIN_API = "/medecin";
export const fetchMedecin = async () => {
    return await Api.get(MEDECIN_API);
}

export const fetchMedecinById = async (medecinId) => {
    return await Api.get(MEDECIN_API + '/' + medecinId);
}
export const deleteMedecin = async (medecinId) => {
    return await Api.delete(MEDECIN_API + '/' + medecinId);
}
export const addMedecin = async (medecin) => {
    return await Api.post("" + MEDECIN_API, medecin);
}
export const editMedecin = (medecin) => {
    return Api.put(MEDECIN_API + '/' + medecin.id, medecin);
}