import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  }, []); // 한번만 실행 : 인자 []
  return (
    <div>
      <h1>Users</h1>
      <UserList users={users}></UserList>
    </div>
  );
};

export default Users;
