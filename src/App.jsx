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
  const isUserNameValid = inputUserName.length >= 3;
  const isPaswordValid = inputPassword.length >= 6;
  const isRiotValid = inputRiotGames.includes("#");
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);

  const isFormValid =
    isUserNameValid && isPaswordValid && isRiotValid && isUserNameValid;

  function getInputClass(value, isValid) {
    if (!value) return "";
    return isValid ? "inputValid" : "inputInvalid";
  }

  async function FetchPostUserData() {
    if (!isFormValid) {
      alert("Данные заполнены неправильно");
      return;
    }

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
        <div
          style={{
            color: "#9a5cff",
            fontSize: "25px",
          }}
        >
          Gamer network
        </div>
        <div
          style={{
            color: "#d8d3df",
            fontSize: "12px",
            padding: "8px 0px 30px 0px",
          }}
        >
          Создание аккаунта
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            defaultValue={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            className={getInputClass(inputEmail, isEmailValid)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            defaultValue={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className={getInputClass(inputPassword, isPaswordValid)}
          />
          <br />
          <input
            placeholder="userName"
            defaultValue={inputUserName}
            onBlur={(e) => setInputUserName(e.target.value)}
            className={getInputClass(inputUserName, isUserNameValid)}
          />
          <br />
          <input
            placeholder="RiotGames#RU1"
            defaultValue={inputRiotGames}
            onBlur={(e) => setInputRiotGames(e.target.value)}
            className={getInputClass(inputRiotGames, isRiotValid)}
          />
          <br />
          <button
            onClick={FetchPostUserData}
            className="registerBtn"
            disabled={!isFormValid}
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
}
