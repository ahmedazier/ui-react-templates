"use client";

import React from "react";
import { usePathname  } from "next/navigation";
import Link from "next/link";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { ModeToggle } from "./dark-toggle";

function MainMenu() {
    const pathname = usePathname(); // Get the current route

    const isActive = (path: string) => pathname === path; // Compare current path
  
    if (!pathname) {
      // Fallback: Ensure `pathname` is defined
      return null;
      }
  return (
        <div className="flex justify-center">
        <Menubar className="m-5 p-6 space-x-4">
            <MenubarMenu>
            <Link href="/">
                <li
                className={`list-none hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 p-1.5 rounded-xl ${
                    isActive("/") ? "bg-violet-600 text-white" : ""
                }`}
                >
                Home
                </li>
            </Link>

            <Link href="/dashboard">
                <li
                className={`list-none hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 p-1.5 rounded-xl ${
                    isActive("/dashboard") ? "bg-violet-600 text-white" : ""
                }`}
                >
                Dashboard
                </li>
            </Link>

            <Link href="/pages/contact">
                <li
                className={`list-none hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 p-1.5 rounded-xl ${
                    isActive("/pages/contact") ? "bg-violet-600 text-white" : ""
                }`}
                >
                Contact
                </li>
            </Link>

            <Link href="/auth/login">
                <li
                className={`list-none hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 p-1.5 rounded-xl ${
                    isActive("/auth/login") ? "bg-violet-600 text-white" : ""
                }`}
                >
                Login
                </li>
            </Link>

            <ModeToggle />
            </MenubarMenu>
        </Menubar>
        </div>
  );
}

export default MainMenu;
