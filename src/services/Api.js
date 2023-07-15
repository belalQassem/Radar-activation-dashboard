import axios from "axios";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${process.env.REACT_APP_API_URL}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(process.env.REACT_APP_API_URL,user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
}
  