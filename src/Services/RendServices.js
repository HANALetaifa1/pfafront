import Api from "../Axios/Api";
const REND_API = "/rend" ;

export const fetchRend = async () => {
    return await Api.get(REND_API);
}



// export const addRend = async (rend) => {
//     return await Api.post(REND_API, rend);

//  }

 export const addRend = async (rend) => {
    try {
      const response = await Api.post(REND_API, rend);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }


//A rapporter

      export const editRendR = (rend) => {
        return Api.put(REND_API + '/raporter/' + rend._id, rend);
    }


 //ajouter rdv avec sms
// export const addRendsms = async (rend) => {
//     return await Api.post(REND_API,'/sms', rend);

//  }

// export const addRendsms = async (rend) => {
//     try {
//       const response = await Api.post(REND_API,'/sms', rend)
//       if (response && response.data) {
//         return response.data;
//       } else {
//         throw new Error('La réponse du serveur est invalide.');
//       }
//     } catch (error) {
//       throw new Error(error.response ? error.response.data.message : error.message);
//     }
//   };




//accepter
export const editRendA = (rendID) => {
    return Api.put(REND_API + '/accept/' +  rendID);
}




export const editRendC = (rendID) => {
    return Api.put(REND_API + '/cancel/' +  rendID);
}

export const editRendS = (rendID) => {
    return Api.put(REND_API + '/accept/' +  rendID);
}

// fetch Historique  les rendez vous de chaque patient 
export const fetchRendP = async (userId) => {
    console.log(userId);
    return await Api.get(REND_API+/user/+userId);
}
//fetch les rendez vous de chaque medecin

export const fetchRendM = async (medecinId) => {
    console.log(medecinId);
    return await Api.get(REND_API+/medecin/+medecinId);
}
export const fetchRendMA = async (medecinId) => {
    console.log(medecinId);
    return await Api.get(REND_API+/medecin/+medecinId+/accepter/);
}



// export const fetchRendPA = async (userId) => {
//     console.log(userId);
//     return await Api.get(REND_API+"/accepted/"+"users/"+ userId);
// }

//
export const fetchRendtById = async (rendId) => {
    return await Api.get(REND_API + '/' + rendId);
}


export const deleteRend= async (rendId) => {
    return await Api.delete(REND_API + '/' + rendId);
}




//  export const editPatient = (patient) => {
//     return Api.put(PATIENT_API + '/' + patient._id, patient);
// }
