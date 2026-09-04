import { useState } from "react";
import { fetchGet } from "../components/Fetches.ts";
import "./Users.css";
import type { User } from "../utils/Interfaces.ts";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function LoadUsers() {
    try {
      const fetchedUsers = await fetchGet.getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.log("backend error");
    }
  }

  return (
    <main>
      <button
        className="loadData"
        style={{ margin: "20px" }}
        onClick={LoadUsers}
      >
        Load Users
      </button>
      <div className="usersBorder">
        {users.map((user: User) => (
          <div key={user.id} className="userBorder">
            <div>{user.email}</div>
            <div>{user.role}</div>
            <div>{user.status}</div>
            <div>{user.emailVerified}</div>
            <div>{user.createdAt}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
