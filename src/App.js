import LoginPage from "./components/login_page/LoginPage";
import SignUpPage from "./components/signup_page/SignUpPage";
import Verification from "./components/Verf/Verification";
import ForgotPass from "./components/forgot_pass/ForgotPassword";
import CheckMail from "./components/forgot_pass/CheckMail";
import NewPassword from "./components/forgot_pass/Newpass";
import Dashboard from "./components/Dashboard/Components";
import BusinessInfo from "./components/User_info/BusinessInfo";
import FinancialInfo from "./components/User_info/FinancialInfo";
import KYC from "./components/User_info/KYC";
// import ProfileInfo from "./components/User_info/ProfileInfo";
import SetupProfile from "./components/User_info/SetupProfile";
import SupportDoc from "./components/User_info/SupportDoc";
// importing components from react-router-dom package
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* This is the alias of BrowserRouter i.e. Router */}
      <BrowserRouter>
        <Routes>
          {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
          <Route path="/">
            <Route index element={<LoginPage />} />
            {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
            <Route path="login" element={<LoginPage />} />

            {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
            <Route path="signUp" element={<SignUpPage />} />
            <Route path="verification" element={<Verification />} />
            <Route path="forgotPassword" element={<ForgotPass />} />
            <Route path="newPassword" element={<NewPassword />} />
            <Route path="checkMail" element={<CheckMail />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="businessInfo" element={<BusinessInfo />} />
            <Route path="financialInfo" element={<FinancialInfo />} />
            <Route path="kyc" element={<KYC />} />
            {/* <Route path="userInfo" element={<ProfileInfo />} /> */}
            <Route path="setupProfile" element={<SetupProfile />} />
            <Route path="supportDoc" element={<SupportDoc />} />

            {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
            {/* <redirect to="/" /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
