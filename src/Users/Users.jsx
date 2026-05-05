import { useEffect, useState } from "react";
import { fetchGet, fetchPost } from "../components/Fetches.js";
import "./Users.css";

export default function Users() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  async function LoadUsers() {
    const [fetchedUsers] = await Promise.all([fetchGet.getUsers()]);
    setData({
      fetchedUsers,
    });
    console.log(data.fetchUsers);
  }

  return (
    <button className="loadData" style={{ margin: "20px" }} onClick={LoadUsers}>
      Load Users
    </button>
  );
}
