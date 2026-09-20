import { UserContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const UserProvider = ({ children }) => {
  const [user, updateUser] = useLocalStorage("user", {
    initials: "JD",
    name: "John Doe",
    role: "Job Seeker",
  });

  const value = {
    user,
    updateUser,
  };

  return <UserContext value={value}>{children}</UserContext>;
};

export default UserProvider;