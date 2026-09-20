import { useState } from "react";
import { UserContext } from "../context/index.js";

const UserProvider = ({ children }) => {
  const [user, _] = useState({
    initials: "JD",
    name: "John Doe",
    role: "Job Seeker",
  });

  const value = {
    user,
  };

  return <UserContext value={value}>{children}</UserContext>;
};

export default UserProvider;
