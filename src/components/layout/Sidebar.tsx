"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, User, Bell } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/user", icon: Clock, label: "User" },
    { href: "/user/profile", icon: User, label: "Profile" },
    { href: "/user/notifications", icon: Bell, label: "Notifications" },
  ];

  return (
    <aside className="p-6 bg-white/4 min-h-screen w-fit">
      <ul className="flex flex-col items-center gap-6 text-white">
        {links.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link href={href} aria-label={label}>
                <Icon
                  size={30}
                  className={`duration-150 cursor-pointer ${
                    active ? "text-sky-500" : "hover:text-cyan-400"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
