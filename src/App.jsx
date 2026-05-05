import { Routes, Route } from "react-router-dom";
import UserInput from "./UserInput";
import Users from "./Users/Users";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Api/Users" element={<Users />}></Route>
        <Route path="/" element={<UserInput />}></Route>
      </Routes>
    </div>
  );
}
