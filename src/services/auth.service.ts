
import { dispatch } from "./api.service";
import jwtService from "./jwt.service";

export const logout = () => {
  jwtService.destroyItem("token");
};

export const login = (requestBody: {
    email: string;
    password: string;
}) => {
   return dispatch(requestBody, "auth/login");
}

export const register = (requestBody: {
    email: string;
    password: string;
}) => {
   return dispatch(requestBody, "auth/register");
}