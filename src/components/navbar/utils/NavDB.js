import { ChatAltIcon, CogIcon, LogoutIcon, ShoppingCartIcon, TemplateIcon, UserIcon } from "@heroicons/react/outline";
import {
  SkinOutlined,

} from "@ant-design/icons";

export const navLinks = [
  {
    id: 0,
    title: "Statistiques",
    icon: <TemplateIcon className="nav-icon text-[#191A43]" />,
    path: "/",
  },
  {
    id: 1,
    title: "Gestion des crèches",
    icon: <ShoppingCartIcon className="nav-icon text-[#191A43]" />,
    path: "/creches",
  },
  {
    id: 2,
    title: "Gestion des utillisateurs",
    icon: <UserIcon className="nav-icon text-[#191A43]" />,
    path: "/users",
  },
  {
    id: 3,
    title: "Gestion des avis et commentaires",
    icon: <ChatAltIcon className="nav-icon text-[#191A43]" />,
    path: "/avis",
  },
  {
    id: 4,
    title: "Gestion des Enfants",
    icon: <SkinOutlined className="nav-icon text-[#191A43]" />,
    path: "/enfants",
  },
 
];
