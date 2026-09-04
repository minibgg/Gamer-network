import { useState } from "react";
import "./UserInput.css";
import { fetchGet, fetchPost } from "./components/Fetches.ts";

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
    isUserNameValid && isPaswordValid && isRiotValid && isEmailValid;

  function getInputClass(value: any, isValid: any) {
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

  function GInput(props: any) {
    return (
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setInput(e.target.value)}
        className={getInputClass(props.value, props.isValid)}
      />
    );
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
          <GInput
            placeholder="Email"
            value={inputEmail}
            setInput={setInputEmail}
            isValid={isEmailValid}
          />
          <br />
          <GInput
            placeholder="Password"
            value={inputPassword}
            setInput={setInputPassword}
            isValid={isPaswordValid}
          />
          <br />
          <GInput
            placeholder="UserName"
            value={inputUserName}
            setInput={setInputUserName}
            isValid={isUserNameValid}
          />
          <br />
          <GInput
            placeholder="RiotGames#RU1"
            value={inputRiotGames}
            setInput={setInputRiotGames}
            isValid={isRiotValid}
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

//Aura Farmium#RUNit
