import { FaHeart, FaRegHandshake, FaUserTie } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

export const coreValues = [
  {
    title: "Professionalism",
    description:
      "We adhere to the highest standards of professionalism in all our operations and interactions.",
    icon: <FaUserTie />,
  },
  {
    title: "Commitment",
    description:
      "We are committed to delivering excellence in every project, regardless of its scale or complexity.",
    icon: <FaRegHandshake />,
    link: "mailto:info@example.com",
  },
  {
    title: "Trust",
    description:
      "We build lasting relationships based on trust, transparency, and consistent delivery of promises.",
    icon: <FaShield />,
    link: "tel:+8801234567890",
  },
  {
    title: "Respect",
    description:
      "We respect our clients, partners, employees, and the environment in all our operations.",
    icon: <FaHeart />,
  },
];
