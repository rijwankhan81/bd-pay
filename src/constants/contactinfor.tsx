import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export const contactInfo = [
  {
    title: "Address:",
    value: ["2123 Digital Plaza, Dhaka, Bangladesh"],
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Phone:",
    value: ["+880 196 995 9999"],
    icon: <FaPhoneAlt />,
    linkType: "phone",
  },
  {
    title: "Email:",
    value: ["support@bdpay.com"],
    icon: <FaEnvelope />,
    linkType: "email",
  },
];
