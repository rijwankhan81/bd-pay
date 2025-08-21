import { FaFileAlt, FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

export const paymentPartner = [
  {
    title: "Send money to family & friends instantly",
    description:
      "Transfer money to anyone, anywhere in Bangladesh within seconds.",
    icon: <TbSend />,
  },
  {
    title: "Recharge mobile anytime",
    description: "Top up any mobile operator instantly, even at midnight.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Pay electricity, gas, and water bills online",
    description:
      "No more waiting in lines. Pay all utility bills from your phone.",
    icon: <FaFileAlt />,
  },
  {
    title: "Shop online without hassle",
    description: "Secure checkout on thousands of websites and apps.",
    icon: <FaShoppingCart />,
  },
];
