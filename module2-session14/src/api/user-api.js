import axios from "axios";
import { USER_HOST_API } from "../constants/api-constant";

// get all user
export const getUsers = async () => {
  const respnse = await axios.get(USER_HOST_API);
  return respnse.data; // => []
};

// get user theo id
export const getUserById = async (user_id) => {
  const respnse = await axios.get(`${USER_HOST_API}/${user_id}`); // => {}
  return respnse.data;
};

// create user
export const createUser = async (user) => {
  await axios.post(USER_HOST_API, user);
};

// update user
export const updateUser = async (user) => {
  await axios.put(`${USER_HOST_API}/${user.id}`, user);
};

// delete user
export const deleteUserById = async (user_id) => {
  await axios.delete(`${USER_HOST_API}/${user_id}`); // => {}
};
