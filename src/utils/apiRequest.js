import axios from "axios";

export const apiRequest = async (method, url, token, data = null) => {
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  
    const baseURL = "http://localhost:3001/api/v1/user";
  
    const axiosConfig = {
      baseURL,
      url,
      method,
      headers,
    };
  
    if (data !== null) {
      axiosConfig.data = data;
    }
  
    try {
      const response = await axios.request(axiosConfig);
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };