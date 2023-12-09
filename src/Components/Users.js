import { Link, Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div className="App-header">
      <h1>Users</h1>
      <div>
        <Link to="friends">Friends</Link>
        <Link to="profile">Profile</Link>
      </div>
      <Outlet />
    </div>
  );
}
