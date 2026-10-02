import { findAllUsers } from "../repositories/user.repository.js";


export const getUsers = async () => {
  return await findAllUsers();
};