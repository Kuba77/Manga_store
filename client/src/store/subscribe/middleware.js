import axios from "axios";
import { message } from "antd";
import configData from "../../config/config.json";

const createNewSubscribe = (credentials) => {
  axios
    .post(`${configData.SUBSCRIBERS}`, credentials)
    .then((response) => {
      if (response.status === 200) {
        message.info("Thanks for subscribed");
      } else {
        console.log("response.message", response.message);
      }
    })
    .catch((error) => {
      const requestMessage = error.response.data.message;
      if (requestMessage) {
        message.warning(`${requestMessage}`);
      } else {
        message.warning("Somethink wrong");
      }
    });
};

export const getHeaders = () => ({
  Autorization: localStorage.getItem("token"),
  "Content Type": "application/json",
});

export const getSubscriber = (email) => {
  const headers = getHeaders();
  const result = axios
    .get(`${configData.SUBSCRIBERS}/${email}`, { headers })
    .then((data) => data)
    .catch((err) => err.response);
  return result;
};

export default createNewSubscribe;
