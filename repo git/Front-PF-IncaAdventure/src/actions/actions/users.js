import axios from "axios";
import {GET_USERS, GET_USERS_BY_NAME, GET_USER_BY_ID} from "../constantes";

export function getUsers(){
  return async function (dispatch){
    try {
      let users = await axios.get("http://localhost:3001/users", {});
      return dispatch({
        type: GET_USERS,
        payload: users.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getUsersByName(name){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let usersByName = await axios.get(`http://localhost:3001/users?name=${name}`, {});
      return dispatch({
        type: GET_USERS_BY_NAME,
        payload: usersByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getUserById(id){
  return async function (dispatch){
    try {
      let userById = await axios.get(`http://localhost:3001/users/${id}`, {});
      return dispatch({
        type: GET_USER_BY_ID,
        payload: userById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
