import { useEffect, useState } from "react";
import { fetchGet, fetchPost } from "../components/Fetches.js";

export default function Users() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  async function LoadUsers() {
    const [fetchUsers] = await Promise.all([fetchGet.getUsers()]);
    setData({
      fetchUsers,
    });
  }

  return (
    <button style={{ margin: "20px" }} onClick={LoadUsers}>
      Load Users
    </button>
  );
}
