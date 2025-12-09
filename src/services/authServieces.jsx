import axios from "axios";

//.....................production..............................
// const baseURL = process.env.NODE_ENV === 'production'? 'https://apipathwp.com' : ""

//....................local...............................
const baseURL = 'http://localhost:7007'; // agar Vite use kar rahe ho


export const signIn = async ({ payload }) => {
  try {
    const response = await apiCall({
      endpoint: "api/auth/log-in",
      method: "POST",
      payload,
    });
    if (response?.success) {
      const obj = {
        user: response?.data,
        token: response?.token,
      };
      localStorage.setItem("user-cred", JSON.stringify(obj));
      return response;
    }
    return response;
  } catch (error) {
    localStorage.removeItem("user-cred");
    throw error;
  }
};

export const apiCall = async ({ endpoint, method = "GET", payload = null }) => {
  try {
    const user = JSON.parse(localStorage.getItem("user-cred"));
    const defaultHeaders = {};

    if (user && user.token) {
      defaultHeaders["Authorization"] = `Bearer ${user?.token}`;
    }

    // Adjust content-type based on payload type
    if (!(payload instanceof FormData)) {
      defaultHeaders["Content-Type"] = "application/json";
    }

    const config = {
      url: `${baseURL}/${endpoint}`,
      method: method,
      headers: defaultHeaders,
    };

    // Check if payload is FormData, in which case Axios handles headers automatically
    if (
      payload &&
      (method === "POST" ||
        method === "post" ||
        method.toLocaleUpperCase() === "PUT")
    ) {
      config["data"] = payload;
    }


    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Me = async () => {
  const user = JSON.parse(localStorage.getItem("user-cred"));
  if (user && user?.token) {
    return await apiCall({ endpoint: "auth/me", method: "GET" });
  }
};
