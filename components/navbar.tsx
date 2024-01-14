"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

type NavbarMenu = {
  title: string;
  link: string;
};

const navbarMenus: NavbarMenu[] = [
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link href="/">
          <Button variant={"ghost"}>
            <Home size={18} />
          </Button>
        </Link>
        {navbarMenus.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <Link href={menu.link} legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                navigationMenuTriggerStyle(),
                !pathname.includes(menu.link) && "opacity-70"
              )}>
                {menu.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

  );
}
