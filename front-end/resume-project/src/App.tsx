import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <h1>Resume builder</h1>
      {/* <NavBar /> */}
      <LoginForm />
    </>
  );
}

export default App;
