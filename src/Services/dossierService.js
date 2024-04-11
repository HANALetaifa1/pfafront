// import Api from "../Axios/Api";
// const DOSS_API = "/doss";


// export const fetchconss = async (patientId) => {
//     console.log(patientId);
//     return await Api.get(DOSS_API+'/cons' + '/patients/'+patientId);
// }

// export const fetchords = async (consId) => {
//     console.log(consId);
//     return await Api.get(DOSS_API+'/ord/'+consId);
// }

// export const fetchpaById  = async (patientId) => {
//   console.log(patientId);
//   return await Api.get(DOSS_API+'/'+patientId);
// }

// export const fetchconById  = async (consId) => {
//   console.log(consId);
//   return await Api.get(DOSS_API+'/cons/'+consId);}



import Api from "../Axios/Api";
const DOSS_API = "/doss";

export const fetchconss = async (patientId) => {
    console.log(patientId);
    return await Api.get(DOSS_API + '/cons/patient/' + patientId);
}

export const fetchords = async (consId) => {
    console.log(consId);
    return await Api.get(DOSS_API + '/ord/' + consId);
}

export const fetchpaById = async (patientId) => {
    console.log(patientId);
    return await Api.get(DOSS_API + '/' + patientId);
}

export const fetchconById = async (consId) => {
    console.log(consId);
    return await Api.get(DOSS_API + '/cons/' + consId);
}
