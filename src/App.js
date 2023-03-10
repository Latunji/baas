import LoginPage from "./components/login_page/LoginPage";
import SignUpPage from "./components/signup_page/SignUpPage";
import Verification from "./components/Verf/Verification";
// importing components from react-router-dom package
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./App.css";
import Newpass from "./components/forgot_pass/Newpass";

function App() {
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <BrowserRouter>
      <Routes>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route path="/" >
        <Route index element={<LoginPage />} />
        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="login" element={<LoginPage />}/>
          
        {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="verification" element={<Verification />} />
          
        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
        {/* <redirect to="/" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Newpass/>
  </>
  );
}

export default App;
