"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Typography";
import { Menu } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { SideBarContent } from "./Sidebar";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between md:justify-end sticky top-0 z-40">
      <div className="flex items-center md:hidden">
        <Button
          variant="ghost"
          size="md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle sidebar"
          className="p-2"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </Button>
        <Image src="/images/logo.png" alt="vybout admin" width={32} height={32} className="ml-3" />
      </div>
      <Text variant="h2" className="hidden md:block font-bold text-lg text-gray-800 mr-auto">
        {/* {user?.name ? `Welcome, ${user.name}` : "Welcome"} */}
        Welcome Kehinde
      </Text>
      <nav className="flex items-center gap-4">
        <Link href="/profile" className="flex items-center gap-2 hover:underline">
          <Avatar text="K" alt="Profile" size="small" className="mr-2" />
          {/* <Text variant="p" className="hidden sm:inline text-gray-700">Profile</Text> */}
        </Link>
      </nav>
      {/* Mobile sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setOpen(false)}>
          <aside className="absolute left-0 top-0 h-full w-64">
            <SideBarContent />
          </aside>
        </div>
      )}
    </header>
  );
}
