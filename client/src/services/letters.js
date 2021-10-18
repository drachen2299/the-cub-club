import axios from "axios";

const apiURL = process.env.NODE_ENV === "development" ? "http://localhost:3001/api" : "https://the-cub-club.herokuapp.com/api";


export const sendLetter = async (data) => {
  try {
    await axios.post(`${apiURL}/letters/new-letter`, data);
  } catch (e) {
    console.error(e.message);
  }
};

export const checkMail = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/letters/${id}`);
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
};

export const readLetter = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/letters/read/${id}`);
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
};

export const deleteLetter = async (id) => {
  try {
    const response = await axios.delete(`${apiURL}/letters/delete/${id}`);
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
};