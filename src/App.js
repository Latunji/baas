import LoginPage from "./components/login_page/LoginPage";
import SignUpPage from "./components/signup_page/SignUpPage";
import Verification from "./components/Verf/Verification";
import ForgotPass from "./components/forgot_pass/forgotPass";
import CheckMail from "./components/forgot_pass/CheckEmail";
import NewPassword from "./components/forgot_pass/NewPassword";
import Dashboard from "./components/Dashboard/dash/Dashboard";
import BusinessInfo from "./components/User_info/BusinessInfo";
import FinancialInfo from "./components/User_info/FinancialInfo";
import PasswordReset from "./components/forgot_pass/PasswordReset";
import EmailVerification from "./components/forgot_pass/EmailVerification";
import Verified from "./components/Verf/Verified";
import KYC from "./components/User_info/KYC";
import ProfileInfo from "./components/User_info/ProfileInfo";
// import ProfileInfo from "./components/User_info/ProfileInfo";
import SetupProfile from "./components/User_info/SetupProfile";
import SupportDoc from "./components/User_info/SupportDoc";
import BankTransfar from "./components/transaction/bankTransfar/BankTransfar";
import Transactions from "./components/transaction/Transactions";
import BaasTransfar from "./components/transaction/baasTransfar/PaymentMethod";
import Beneficiaries from "./components/transaction/baasTransfar/Beneficiaries";
import TransferSummary from "./components/transaction/baasTransfar/TransfarSummary";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./App.css";
import Baas from "./components/Dashboard/Baas";
import PaymentMethod from "./components/transaction/baasTransfar/PaymentMethod";
import BillPayment from "./components/transaction/BillPayment/BillPayment";
import Bills from "./components/transaction/BillPayment/Bills";
import History from "./components/transaction/History";
import Sidebar2 from "./components/sidebar/Sidebar2";
function App() {
  return (
    <main className="app">
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
            <Route path="dashboard" element={<Baas />} />
            <Route path="businessInfo" element={<BusinessInfo />} />
            <Route path="profileInfo" element={<ProfileInfo />} />
            <Route path="financialInfo" element={<FinancialInfo />} />
            <Route path="kyc" element={<KYC />} />
            {/* <Route path="userInfo" element={<ProfileInfo />} /> */}
            <Route path="setupProfile" element={<SetupProfile />} />
            <Route path="supportDoc" element={<SupportDoc />} />
            <Route path="passwordReset" element={<PasswordReset />} />
            <Route path="summary" element={<TransferSummary/>}/>

            <Route path="emailVerification" element={<EmailVerification />} />
            <Route path="verified" element={<Verified />} />
            <Route path="baasTransfer" element={<BaasTransfar />} />
            <Route path="beneficiaries" element={<Beneficiaries />} />
            <Route path="paymentMethod" element={<PaymentMethod />} />
            <Route path="bankTransfer" element={<BankTransfar />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="billPayment" element={<BillPayment />} />
            <Route path="bills" element={<Bills />} />
            <Route path="transactionHistory" element={<History />} />
            <Route path="sidebar2" element={<Sidebar2 />} />
            {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
            {/* <redirect to="/" /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
