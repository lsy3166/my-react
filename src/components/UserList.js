function UserList({ users }) {
  const userList = users.map((user) => {
    return (
      <div className="card mb-2">
        <li className="card-body p-2" key={user.id}>
          {user.name} ({user.email})
        </li>
      </div>
    );
  });
  return <ol>{userList}</ol>;
}

export default UserList;
