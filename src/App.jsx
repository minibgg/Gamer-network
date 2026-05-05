import { useState, useEffect, use } from "react";
import "./App.css";
import "./components/Fetches.js";
<<<<<<< HEAD
=======
import { fetchPost } from "./components/Fetches.js";
>>>>>>> SCRUM-14-create-add-user-form-react

export default function UserInput() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputRiotGames, setInputRiotGames] = useState("");
  const [data, setData] = useState("");

<<<<<<< HEAD
  function Register(Email, userName) {
    console.log(inputEmail, inputUserName, inputRiotGames);
=======
  console.log(inputEmail, inputUserName, inputRiotGames);

  async function FetchPostUserData() {
    const createdUser = await fetchPost.postUserData({
      name: inputUserName,
      email: inputEmail,
      riotUser: inputRiotGames,
    });

    return FetchPostUserData;
>>>>>>> SCRUM-14-create-add-user-form-react
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
<<<<<<< HEAD
        <button onClick={Register}>Register</button>
=======
        <button onClick={FetchPostUserData}>Register</button>
>>>>>>> SCRUM-14-create-add-user-form-react
      </div>
    </main>
  );
}
