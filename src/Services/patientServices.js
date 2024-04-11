import Api from "../Axios/Api";
const PATIENT_API = "/patient"

export const fetchPatient = async () => {
    return await Api.get(PATIENT_API);
}

export const fetchPatient1 = async (medecinId) => {
    console.log(medecinId);
    return await Api.get(PATIENT_API+/patient/+medecinId);
}

export const fetchPatientById = async (patientId) => {
    return await Api.get(PATIENT_API + '/' + patientId);
}

export const addPatient = async (patient) => {
    return await Api.post(PATIENT_API, patient);
 }

export const deletePatient = async (patientId) => {
    return await Api.delete(PATIENT_API + '/' + patientId);
}

export const editPatient = (patient) => {
    return Api.put(PATIENT_API + '/' + patient._id, patient);
}

