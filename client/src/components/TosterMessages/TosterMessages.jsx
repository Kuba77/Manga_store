import { message } from "antd";
import "antd/dist/antd.css";


export const successMassage = () => message.success("Thanks for subscribed");
export const warningMessage = () => message.warning("Somethink wrong, try again latter");
export const errorMessage = () => message.error("Somethink wrong");

export const successLogin = () => message.success("Welcome home");