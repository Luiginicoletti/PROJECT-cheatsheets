import { SignUp } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Page() {

  return (
    <div className={cn(
      "flex justify-evenly border h-full w-full items-center bg-gradient-to-br tranistion from-sky-950 via-black to-violet-950"
      ,)}>
      <Image
        className="opacity-20"
        src="/bg.jpg"
        alt="background"
        fill />
      <h1 className="hover:blur-sm text-8xl font-bold z-10 text-white drop-shadow-2xl animate-pulse">Bom dia flor 🌼<br />
        vai uma colinha?</h1>
      <div>
        <SignUp />
      </div>
    </div>
  )

}