import { useMemo, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  console.log("Users evaluated");

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  // const usersList = useMemo(() => {
  //   console.log("usersList evaluated");
  //   return (
  //     <ul>
  //       {DUMMY_USERS.map((user) => (
  //         <User key={user.id} name={user.name} />
  //       ))}
  //     </ul>
  //   );
  // }, []);
  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
