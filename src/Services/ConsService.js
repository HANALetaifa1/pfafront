import Api from "../Axios/Api";
const CONS_API = "/cons";

export const fetchCons = async (patientId) => {
    console.log(patientId);
    return await Api.get(CONS_API+'/patient/'+patientId);
}

export const fetchConsById = async (consId) => {
    return await Api.get(CONS_API + '/' + consId);
}

export const addCons = async (cons) => {
    return await Api.post(CONS_API+ '/' + cons);
 }

export const deleteCons= async (consId) => {
    return await Api.delete(CONS_API + '/' + consId);
}

export const editCons= (cons) => {
    return Api.put(CONS_API + '/' + cons._id, cons);
}

