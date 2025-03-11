import { Cog, House, Inbox, NotebookPen, Search } from 'lucide-react';
import { LinkButton } from './index';
const QuickButtons = [
  {
    name: 'Home',
    link: '/home',
    icon: <House size={18} />
  },
  {
    name: 'Inbox',
    link: '/inbox',
    icon: <Inbox size={18} />
  },
  {
    name: 'My Feeds',
    link: '/feeds/personal',
    icon: <NotebookPen size={18} />
  },
  {
    name: 'Search',
    link: '/search',
    icon: <Search size={18} />
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: <Cog size={18} />
  }
];
export const SideBar = () => {
  return (
    <aside className="w-full bg-background p-2 md:w-[240px] md:p-4">
      <div className="group relative hidden cursor-pointer text-4xl font-black text-[#03051E] md:block">
        Next<span className="text-[#D91656]">Role</span>
        <div className="absolute -bottom-2 left-0 h-1 w-0 bg-[#D91656] transition-all duration-300 group-hover:w-full"></div>
      </div>
      <ul className="flex items-start justify-between gap-2 md:my-4 md:flex-col md:justify-start md:gap-5">
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
