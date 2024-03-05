import bcrypt from "bcryptjs";
import { supabase } from "./supabase";

// const salt = bcrypt.genSaltSync(parseInt(process.env.REACT_APP_SALT_ROUNDS));
//   const hashedPassword = bcrypt.hashSync(password, salt);

const login = async (username, password) => {
  let error = null;
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("username", username);
  if (data.length < 1) {
    error = "Invalid username/password";
  }
  if (error) {
    return { status: 401, message: error };
  }
  const selectedUser = data[0];
  const isValid = bcrypt.compareSync(password, selectedUser.password);
  if (isValid) {
    localStorage.setItem("@token", JSON.stringify(selectedUser));
    return { status: 200, message: "Login Successfull"};
  }
  return { status: 401, message: "Invalid username/password"};
};

export const AuthService = {
  isAuthenticated: () => localStorage.getItem("@token"),
  login,
};
