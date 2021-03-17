function UserList({ users }) {
  const userList = users.map((user) => {
    return (
      <div className="card mb-2" key={user.id}>
        <li className="card-body p-2">
          {user.name} ({user.email})
        </li>
      </div>
    );
  });
  return <ol>{userList}</ol>;
}

export default UserList;
