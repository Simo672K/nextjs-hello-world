"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { BsBag } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Cart from "@/components/Cart";

export default function Navbar() {
  const currentRoute= usePathname();
  const routes= [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/meals",
      name: "Meals",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/contact-us",
      name: "Contact Us",
    },
  ]

  return (
    <div className="py-2 border-b">
      <div className="container flex items-center mx-auto">
        <h3 className="me-28 font-bold text-xl text-green-800">HealtyFood</h3>
        <NavigationMenu className="ms-auto">
          <NavigationMenuList>
            {routes.map(
              route=>
                <NavigationMenuItem key={route.name} className="me-[1.4rem_!important]">
                  <Link
                    href={route.href}
                    className={cn(currentRoute === route.href && 'text-green-600', 'font-medium')}
                    >{route.name}</Link>  
                </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              <Button className="px-6 me-4 ">Login</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Cart/>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
