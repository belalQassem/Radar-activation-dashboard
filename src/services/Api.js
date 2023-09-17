import axios from "axios";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`http://185.196.21.227:3530/users/${id}`);
}

export const addUser = async (user,token) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/users/insert`,user,{
        headers: {
          Authorization:`token ${token}`,
        },
      });
}

export const updateUser = async (id, user,token) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/users/update/${id}`,user,{
      headers: {
        Authorization:`token ${token}`,
      },
    });
}
export const deleteUser = async (id,token) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/users/delete/${id}`,{
        headers: {
          Authorization:`token ${token}`,
        },
      });
}
  
export const loginUser = async (email, password, otp) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/login`,{ email, password,otp });
 };
 export const resend = async (uid,token) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/users/resend_email/`,{uid},{
      headers: {
        Authorization:`token ${token}`,
      },
      });
 }

 export const GetNumberOfUser = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/statistics/number_of_users`,{
      headers: {
        Authorization:`token ${token}`,
      },
  }
  );
}