import axios from "axios";

const loginUser = async (email, password, otp) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      { email, password,otp }
    );
     return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.data.qrCodeDataURL);
    }

    if (error.request) {
      throw new Error("Network error. Please check your internet connection.");
    }

    throw new Error("Something went wrong. Please try again later.");
  }
};

export default loginUser;


