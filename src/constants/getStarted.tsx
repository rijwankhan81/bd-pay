import { BsBank } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaCheckCircle,
  FaCreditCard,
  FaMobileAlt,
  FaRegIdCard,
} from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";

export const getStarted = [
  {
    number: "1",
    title: "Download BD PAY",
    description: "Available on Android & iOS.",
    icon: <FaAndroid />,
    icon2: <FaApple />,
  },
  {
    number: "2",
    title: "Create Your Account",
    description: "Sign up in minutes with your NID & mobile number.",
    icon: <FaRegIdCard />,
    icon2: <FaMobileAlt />,
  },
  {
    number: "3",
    title: "Add Money & Pay",
    description: "Use bank, card, or agent cash-in.",
    icon: <BsBank />,
    icon2: <FaCreditCard />,
  },
  {
    number: "4",
    title: "Enjoy Seamless Payments",
    description: "Transfer, shop, and manage finances instantly.",
    icon: <MdAccountBalanceWallet />,
    icon2: <FaCheckCircle />,
  },
];
