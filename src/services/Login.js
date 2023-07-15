import axios from "axios";

const loginUser = async (username, password) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/users?username=${username}&password=${password}`
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error("An error occurred. Please try again later.");
      } else if (error.request) {
        throw new Error("Network error. Please check your internet connection.");
      } else {
        throw new Error("Something went wrong. Please try again later.");
      }
    }
  };
  export default loginUser;


