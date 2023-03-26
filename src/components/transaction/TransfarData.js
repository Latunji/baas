import transfar from "../assets/bank.png";
import moneyIn from "../assets/dashboard/moneyIn.png";
import moneyOut from "../assets/dashboard/moneyOut.png";


export const TransfarData = [
  {
    icon: transfar,
    id:"1",
    title: "Intra Bank transfar",
    body: "Send money to people using Baas",
  },
  {
    icon: transfar,
    id:"2",
    title: "Inter Bank transfar",
    body: "Send money to other banks",
  },
  {
    icon: transfar,
    id:"3",
    title: "International transfar",
    body: "Send money outside Nigeria",
  },
];

export const TransfarType = [
  {
    id: "1",
    heading: "Funds Transfer",
    path: "transactions",
  },
  {
    id: "2",
    heading: "Bills Payment",
    path: "billPayment",
  },
  {
    id: "3",
    heading: "Transaction History",
    path: "history",
  },
];

export const SummaryData = [
  {
    title: "Name",
    info: "DAVID OGUNMODEDE",
  },
  {
    title: "Amount",
    info: "#5,0000",
  },
  {
    title: "Fee",
    info: "#0.00",
  },
  {
    title: "Transfar Type",
    info: "One Time",
  },
];

export const TransfarHistory = [
  {
    icon: moneyIn,
    subject: "Opeoluwa Samuel",
    time: "10:42:23 AM",
    date: "20-03-2022",
    amount: "-₦5,000.00",
    status: "Success",
  },
  {
    icon: moneyOut,
    subject: "Adeyemi Onanuga",
    time: "10:42:23 AM",
    date: "20-03-2022",
    amount: "+₦5,000.00",
    status: "Success",
  },
  {
    icon: moneyIn,
    subject: "Obi Amaka",
    time: "10:42:23 AM",
    date: "20-03-2022",
    amount: "-₦5,000.00",
    status: "Pending",
  },
];