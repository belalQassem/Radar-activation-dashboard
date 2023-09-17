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

// statistics
export const GetNumberOfMotherboards = async (token) => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/statistics/number_of_all_radars`,{
        headers: {
            Authorization:`token ${token}`,
        },
    }
    );
    }

    export const GetNumberOfActiveMotherboards = async (token) => {
        return await axios.get(`${process.env.REACT_APP_API_URL}/statistics/number_of_activated_radars`,{
            headers: {
                Authorization:`token ${token}`,
            },
        }
        );
        }

    export const RateofActiveMotherboards = async (token) => {
        return await axios.get(`${process.env.REACT_APP_API_URL}/statistics/rate_of_radar_activation`,{
            headers: {
                Authorization:`token ${token}`,
            },
        }
        );
        }


    export const Recent = async (token) => {
        return await axios.get(`${process.env.REACT_APP_API_URL}/statistics/recent_logins`,{
            headers: {
                Authorization:`token ${token}`,
            },
        }
        );
        }