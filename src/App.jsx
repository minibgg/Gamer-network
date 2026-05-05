import { Routes, Route } from "react-router-dom";
import UserInput from "./UserInput";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserInput />}></Route>
      </Routes>
    </div>
  );
}
