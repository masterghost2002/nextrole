'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export const LinkButton = ({
  href,
  icon,
  name
}: {
  href: string;
  className?: string;
  icon: React.ReactNode;
  name: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 md:flex-row md:gap-3 md:text-lg',
        isActive && 'font-semibold text-neutral-900'
      )}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};
