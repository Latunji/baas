import LoginPage from "./components/login_page/loginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
// importing components from react-router-dom package
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    // <div className="container">
    // <div className="App">
    //   <LoginPage />
    // </div>
    // </div>
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
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <redirect to="/" /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
