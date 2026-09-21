import { use } from "react";
import { UserContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { getJobResources } from "../resources/index.js";

const UserProvider = ({ children }) => {
  const { userPromise } = getJobResources();
  const fetchedUser = use(userPromise);
  const [user, updateUser] = useLocalStorage("user", fetchedUser);

  const value = {
    user,
    updateUser,
  };

  return <UserContext value={value}>{children}</UserContext>;
};

export default UserProvider;