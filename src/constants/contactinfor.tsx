import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const contactInfo = [
  {
    title: "Phone",
    value: ["+880 196 995 9999"],
    icon: <FaPhoneAlt />,
    linkType: "phone",
  },
  {
    title: "Email",
    value: ["support@bdpay.com"],
    icon: <FaEnvelope />,
    linkType: "email",
  },
  {
    title: "Address",
    value: [
      "4th Floor, IPL City Centre, Holding No. 162, O. R. Nizam Road, Goal Pahar, PS: Panchlaish, District:- Chattogram, Bangladesh",
    ],
    icon: <FaMapMarkerAlt />,
  },
];
