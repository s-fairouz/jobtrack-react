import { use } from "react";
import { UserContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { getJobResources } from "../resources/index.js";

const UserProvider = ({ children }) => {
  const { userPromise } = getJobResources();
  const user = use(userPromise);
 
  const [loggedUser, updateUser] = useLocalStorage("user", user);

  const value = {
    user: loggedUser,
    updateUser,
  };

  return <UserContext value={value}>{children}</UserContext>;
};

export default UserProvider;
