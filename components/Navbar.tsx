"use client"

import { motion } from 'framer-motion';
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import MobileSidebar from "@/components/mobile-sidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"]
})

const Navbar = () => {
  return (
    <div className="fixed h-16 w-full z-50 flex justify-between items-center
    py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <motion.h1
            className={cn("text-xl md:text-3xl font-bold text-primary", font.className)}
            initial={{ x: -1000 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}

          >
            <p className="hidden lg:block">cheatsheets<span className="text-sm">bynico</span></p>
            <p className="hidden lg:hidden md:block">CS<span className="text-sm">bynico</span></p>
            <p className="md:hidden"><span className="text-md">csbn</span></p>
          </motion.h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <motion.div
          initial={{ y: -500 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 5,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}>

          <Button size="sm" variant="premium">
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        </motion.div>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;