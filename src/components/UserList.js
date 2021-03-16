function UserList({ users }) {
  const userList = users.map((user) => {
    return (
      <li key={user.id}>
        {user.name} ({user.email})
      </li>
    );
  });
  return <ol>{userList}</ol>;
}

export default UserList;
