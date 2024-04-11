import Api from '../Axios/Api';
const USER_API = "/user";

export const signup = async (user) => {
  const u = {}
   for (var pair of user.entries()) {
       u[pair[0]] = pair[1]
     }
    return await Api.post(USER_API + '/register');
}


export const signin = async (user) => {
    try {
      const response = await Api.post(USER_API + "/login", user);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }







// export const signin = async (user) => {
//     try {
//       const response = await Api.post(USER_API + "/login", user);

//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   }