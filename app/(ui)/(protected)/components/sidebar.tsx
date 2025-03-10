import { Cog, House, Inbox, NotebookPen, Search } from "lucide-react";
import { LinkButton } from "./index";
const QuickButtons = [
  {
    name: "Home",
    link: "/home",
    icon: <House size={18} />,
  },
  {
    name: "Inbox",
    link: "/inbox",
    icon: <Inbox size={18} />,
  },
  {
    name: "My Feeds",
    link: "/feeds/personal",
    icon: <NotebookPen size={18} />,
  },
  {
    name: "Search",
    link: "/search",
    icon: <Search size={18} />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Cog size={18} />,
  },
];
export const SideBar = () => {
  return (
    <aside className="p-2 md:p-4 w-full md:w-[240px] bg-background">
      <div className="text-4xl hidden md:block font-black text-[#03051E] relative group cursor-pointer">
        Next<span className="text-[#D91656]">Role</span>
        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#D91656] group-hover:w-full transition-all duration-300"></div>
      </div>
      <ul className="flex md:flex-col gap-2 md:gap-5 md:my-4  justify-between md:justify-start items-start">
        {QuickButtons.map((link) => (
          <LinkButton
            key={link.link}
            href={link.link}
            name={link.name}
            icon={link.icon}
          />
        ))}
      </ul>
    </aside>
  );
};
