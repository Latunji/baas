import api from "../assets/sidebar/api.png";
import dashboard from "../assets/sidebar/dashboard.png";
import manageAccount from "../assets/sidebar/manageAccount.png";
import message from "../assets/sidebar/message.png";
import transactions from "../assets/sidebar/transactions.png";
import settings from "../assets/sidebar/settings.png";

export const SidebarData = [
  {
    icon: dashboard,
    heading: "Dashboard",
    path: "/dashboard"
  },
  {
    icon: transactions,
    heading: "Transaction",
    path:'/transactions'
  },
  {
    icon: message,
    heading: "Messages",
    path: '/message'
  },
  {
    icon: manageAccount,
    heading: "Account Management",
    path:'/manage'
  },
  
  
];
export const AccountSetting = [
  {
    icon: api,
    heading: "Api Key Generator",
  },
  {
    icon: settings,
    heading: "Settings",
  },
];

export const SignUpData = [
  {
    number: 1,
    heading: "Personal Information",
  },
  {
    number: 2,
    heading: "Business Information",
  },
  {
    number: 3,
    heading: "Financial Information",
  },
  {
    number: 4,
    heading: "KYC and AML",
  },
  {
    number: 5,
    heading: "Supporting Documents"
  }

];
