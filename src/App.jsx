import { useState, useEffect, use } from "react";
import "./App.css";

export default function UserInput() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [data, setData] = useState("");

  function Register(Email, userName) {
    console.log("Данные для регистрации:", { Email, userName });
    console.log(inputEmail, inputUserName);
  }

  return (
    <main>
      <div>
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
        <button onClick={Register}>Register</button>
      </div>
    </main>
  );
}
