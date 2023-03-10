import LoginPage from "./components/login_page/LoginPage";
import SignUpPage from "./components/signup_page/SignUpPage";
// importing components from react-router-dom package
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        <LoginPage />
      {/* </Routes> */}
    </div>
  );
}

export default App;
