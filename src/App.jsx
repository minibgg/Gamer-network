import { useState, useEffect, use } from "react";
import "./App.css";
import "./components/Fetches.js";
import { fetchPost } from "./components/Fetches.js";

export default function UserInput() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputRiotGames, setInputRiotGames] = useState("");
  const [data, setData] = useState("");

  console.log(inputEmail, inputUserName, inputRiotGames);

  async function FetchPostUserData() {
    const createdUser = await fetchPost.postUserData({
      name: inputUserName,
      email: inputEmail,
      riotUser: inputRiotGames,
    });

    return FetchPostUserData;
  }

  return (
    <main>
      <div>
        <input
          placeholder="RiotGames#RU1"
          style={{ border: "2px solid pink" }}
          value={inputRiotGames}
          onChange={(e) => setInputRiotGames(e.target.value)}
        />
        <br />
        <input
          placeholder="Email"
          style={{ border: "2px solid violet" }}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="userName"
          style={{ border: "2px solid red" }}
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
        />
        <br />
        <button onClick={FetchPostUserData}>Register</button>
      </div>
    </main>
  );
}
