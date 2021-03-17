import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import UserList from "../components/UserList";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      });
  }, []); // 한번만 실행 : 인자 []
  return (
    <div>
      <h1>Users</h1>
      {loading ? <Spinner></Spinner> : <UserList users={users}></UserList>}
    </div>
  );
};

export default Users;
