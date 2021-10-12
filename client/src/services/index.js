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


export const createBear = async () => {
  try {
    const response = await axios.post(apiURL)
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

export const sendLetter = async (data) => {
  try {
    await axios.post(`${apiURL}/letters/new-letter`, data);
  } catch (e) {
    console.error(e.message);
  }
}