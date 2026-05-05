import { useState } from "react";
import "./App.css";
import { fetchGet, fetchPost } from "./components/Fetches.js";

export default function UserInput() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputRiotGames, setInputRiotGames] = useState("");
  const [users, setUsers] = useState([]);

  console.log(inputEmail, inputUserName, inputRiotGames);

  async function FetchPostUserData() {
    await fetchPost.postUserData({
      email: inputEmail,
      password: inputPassword,
      name: inputUserName,
      riotUser: inputRiotGames,
    });
    const freshUsers = await fetchGet.getUsers();
    setUsers(freshUsers);

    console.log(freshUsers);
  }

  return (
    <main>
      <div className="mainBorder">
        <div>Gamer network</div>
        <div>
          <input
            placeholder="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <br />
          <input
            placeholder="userName"
            value={inputUserName}
            onChange={(e) => setInputUserName(e.target.value)}
          />
          <br />
          <input
            placeholder="RiotGames#RU1"
            value={inputRiotGames}
            onChange={(e) => setInputRiotGames(e.target.value)}
          />
          <br />
          <button onClick={FetchPostUserData}>Register</button>
        </div>
      </div>
    </main>
  );
}
