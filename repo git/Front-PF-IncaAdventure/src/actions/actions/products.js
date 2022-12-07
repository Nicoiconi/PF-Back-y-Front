import axios from "axios";
import {GET_PRODUCTS, GET_PRODUCTS_BY_NAME, GET_PRODUCTS_BY_ID} from "../constantes";

export function getProducts(){
  return async function (dispatch){
    try {
      let products = await axios.get("http://localhost:3001/products", {});
      return dispatch({
        type: GET_PRODUCTS,
        payload: products.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductsByName(name){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let productsByName = await axios.get(`http://localhost:3001/products?name=${name}`, {});
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: productsByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductsById(id){
  return async function (dispatch){
    try {
      let productsById = await axios.get(`http://localhost:3001/products/${id}`, {});
      return dispatch({
        type: GET_PRODUCTS_BY_ID,
        payload: productsById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

