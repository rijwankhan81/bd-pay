import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export const contactInfo = [
  {
    title: "Address:",
    value: [
      "24, Halishahar H/E, R#01, Block-H, Halishahar, Chattogram-4216, Bangladesh",
    ],
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Email:",
    value: ["info@amesl.com.bd", "sales@amesl.com.bd"],
    icon: <FaEnvelope />,
    linkType: "email",
  },
  {
    title: "Phone:",
    value: ["+8801712345678", "+8801768147636"],
    icon: <FaPhoneAlt />,
    linkType: "phone",
  },
  {
    title: "Timing:",
    value: ["Mon - Fri: 9:00 AM - 6:00 PM"],
    icon: <FaClock />,
  },
];
