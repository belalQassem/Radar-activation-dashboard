import axios from "axios"
export const AddMotherboard = async (motherboard) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/motherboards/key`,motherboard
    );
}

export const UpdateMotherboard = async (motherboard,id,token) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/motherboards/update/${id}`,motherboard,{
        headers: {
          Authorization:`token ${token}`,
        },
    }
    );
}
export const ActiveMotherboard = async (id,token) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/motherboards/active/${id}`,{token}
    );
};

export const InActiveMotherboard = async (id,token) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/motherboards/inactive/${id}`,{token}
    );
};