import { GiftIcon, HomeIcon, PencilIcon, TicketIcon, UserIcon } from "@heroicons/react/outline";
import {
  AppstoreOutlined,
  ShopOutlined,
  SkinOutlined,
  UserOutlined,
  CommentOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export const InvestDB = [
  {
    id:0,
    title: "Nombre des parents",
    desc: "  ",
    price: " 20000 ",
    upOrDown: "up",
    percent: "",
    icon: <UserIcon className="invest-icon" />,
  },
  {
    id:1,
    title: "Nombre des propriétaires",
    desc: "",
    price: "16000",
    upOrDown: "down",
    percent: "",
    icon: <UserIcon className="invest-icon" />,
  },
  {
    id:2,
    title: "Nombre des enfants",
    desc: "",
    price: " 3500 ",
    upOrDown: "up",
    percent: "",
    icon: <SkinOutlined className="invest-icon" />,


  },
  {
    id:3,
    title: "Nombre des commentaires",
    desc: "",
    price: "15000",
    upOrDown: "down",
    percent: "",
    icon: <CommentOutlined className="invest-icon" />,
  },
];
