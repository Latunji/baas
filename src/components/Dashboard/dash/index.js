import bell from "../../assets/dashboard/bell.png";
import search from "../../assets/dashboard/search.png";
import wallet from "../../assets/dashboard/wallet.png";
import moneyIn from "../../assets/dashboard/moneyIn.png";
import moneyOut from "../../assets/dashboard/moneyOut.png";
import pending from "../../assets/dashboard/pending.png";
import total from "../../assets/dashboard/total.png";
import users from "../../assets/dashboard/users.png";
import polaris from "../../assets/dashboard/polaris.png";
import add from "../../assets/dashboard/add.png";
import transfar from "../../assets/dashboard/transfar.png";
import request from "../../assets/dashboard/request.png";
import more from "../../assets/dashboard/more.png";


export const Notification = [
  {
    icon: bell,
  },
  {
    icon: search,
  },
];

export const CardsData =[
    {
        icon: wallet,
        title: "Account Balance",
        amount: "#8,000,000",
        color:{
            backGround: "#fffff",
        }
    },
    {
        icon: moneyIn,
        title: "Money Funded",
        amount: "#14,000,000",
        color:{
            backGround: "#fffff",
        },
    },
    {
        icon: moneyOut,
        title: "Total Expense",
        amount: "#4,000,000",
        color:{
            backGround: "#fffff",
        }
    },
    {
        icon: pending,
        title: "Pending Transactions",
        amount: "#1,200",
        color:{
            backGround: "#fffff",
        }
    },
 
];

export const Highlight =[
    {
        title: "Highlight",
        value: "1,200,000",
    }

];

export const PeopleData = [
  {
      icon: total,
      title: "Total Transactions",
      amount: 33,
      color:{
          backGround: "#fffff",
      }
  },
  {
      icon: users,
      title: "Users Added",
      amount: 3,
      color:{
          backGround: "#fffff",
      }
  },
];

export const QuickTransfar = [
  {
    icon: polaris,
    name: "Ogunmodede Opeyemi",
  },
  {
    icon: polaris,
    name: "Ogunmodede Opeyemi",
  },
  {
    icon: polaris,
    name: "Ogunmodede Opeyemi",
  },
];

export const TransfarData=[
    {
        icon: add,
        name: "Top Up"
    },
    {
        icon: transfar,
        name: "Transfar"
    },
    {
        icon: request,
        name: 'request'
    },
    {
        icon: more,
        name: 'more'
    }
];

export const HistoryData = [
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