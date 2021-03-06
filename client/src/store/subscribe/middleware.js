import axios from "axios";
import { message } from "antd";
import configData from "../../config/config.json";

import "antd/dist/antd.css";

const createNewSubscribe = (credentials) => {
  axios
    .post(`${configData.SUBSCRIBERS}`, credentials)
    .then((response) => {
      if (response.status === 200) {
        message.success("Thanks for subscribed");
      } else {
        message.warning("Somethink wrong, try again latter", response.message);
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

export const getSubscriber = (email) => {
  const result = axios
    .get(`${configData.SUBSCRIBERS}/${email}`)
    .then((data) => data)
    .catch((err) => err.response);
  return result;
};

export default createNewSubscribe;
