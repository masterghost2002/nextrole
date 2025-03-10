"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
export const LinkButton = ({
  href,
  icon,
  name,
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
        "flex md:flex-row flex-col items-center text-neutral-500 gap-2 md:gap-3 hover:text-neutral-900 text-xs md:text-lg font-medium",
        isActive && "text-neutral-900 font-semibold"
      )}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};
