import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../api.js";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      const res = await api.post("register", userData);

      if (!userData.name || !userData.email || !userData.password) {
        toast.error("All fields are required");
      }
      console.log(res);
      setUser(res.data.user);
      toast.success(res.data.message || "Registeration Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const login = async (userData) => {
    try {
      const res = await api.post("/login", userData);

      if (!userData.email || !userData.password) {
        toast.error("All fields are required");
      }

      setUser(res.data.user);
      toast.success(res.data.message || "Login Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <UserContext.Provider value={{ register, user, login }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
