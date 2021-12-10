import axios, { setAuthToken } from "./htttWraper";
import configData from "../config/config.json";
import jwtDecode from "jwt-decode";

export async function logOrRegisterCustomer(value) {
  try {
    return await axios
      .post(configData.GOOGLE_LOGIN_URL, {
        tokenId: value.tokenId,
      })
      .then((res) => {
        const user = jwtDecode(res.data.token);
        return user;
      });
  } catch (e) {
    return e.message;
  }
}

export async function registerCustomer(value) {
  try {
    return await axios.post(configData.CUSTOMERS_URL, value).then((res) => {
      return res;
    });
  } catch (error) {
    return error.response.data;
  }
}

export async function loginCustomer(value) {
  try {
    return await axios
      .post(configData.CUSTOMERS_LOGIN_URL, value)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        return jwtDecode(res.data.token);
      });
  } catch (error) {
    return error.response.data;
  }
}
export function logoutCustomer() {
  try {
    sessionStorage.removeItem("token");
    setAuthToken(false);
  } catch (error) {
    return error.response.data;
  }
}

export async function updateCustomer(value) {
  try {
    return await axios.put(configData.CUSTOMERS_URL, value).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error.response.data;
  }
}
export async function updateCustomerPassword(value) {
  try {
    return await axios
      .put(configData.CUSTOMERS_PASSWORD_URL, value)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error.response.data;
  }
}