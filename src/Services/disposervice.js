// import Api from "../Axios/Api";
// const dispo_API = "/disponibilite";

// // export const gg = async (dispo) => {
// //     return await Api.post(dispo_API, dispo);
// //  }

// export const fetchdispo = async () => {
//     return await Api.get(dispo_API);
// }

//  export const addDispo = async (dispo) => {
//     try {
//       const response = await Api.post(dispo_API, dispo);

//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   }
// frontend/services/dispoService.js

import Api from "../Axios/Api";

const dispo_API = "/disponibilite";

export const fetchDispo = async () => {
    try {
        const response = await Api.get(dispo_API);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const addDispo = async (dispo) => {
    try {
        const response = await Api.post(dispo_API, dispo);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}
