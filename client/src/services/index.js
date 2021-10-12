import axios from "axios";

const apiURL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "produrl";

export const defaultRoute = async () => {
  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const createBear = async (userId, newBear) => {
  try {
    const response = await axios.post(`${apiURL}/users/new-bear/${userId}`, newBear);
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const getUsers = async () => {
  try {
    const res = await axios.get(`${apiURL}/users/all`);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const registerUser = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/users/register`, userInfo);
    localStorage.setItem("token", response.data.token)
    return response.data.user;
  } catch (error) {
    console.error(error.message);
  }
};

const buildHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/users/authenticate`, config);
      return response.data.user;    
    }
    return null;
  } catch (error) {
    console.error(error.message);
  }
};
export const loginUser = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/users/login`, userInfo);
    localStorage.setItem("token", response.data.token)
    return response.data.user;
  } catch (error) {
    console.error(error.message)
  }
};


export const sendLetter = async (data) => {
  try {
    await axios.post(`${apiURL}/letters/new-letter`, data);
  } catch (e) {
    console.error(e.message);
  }
}