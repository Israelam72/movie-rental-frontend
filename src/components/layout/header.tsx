import { Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-b-pink-md/30 w-full backdrop-blur-md">
      <div className="flex h-16 mx-10 items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Clapperboard className="text-pink-md border-pink-light" />
            <div className="absolute inset-0 border-2 border-pink-md rounded-md transform -rotate-12"></div>
          </div>
          <h1 className="text-xl font-bold">RENTAMOVIE</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Button className="bg-transparent hover:bg-transparent text-foreground hover:text-pink-light transition-colors duration-300 font-bold p-0">Movies</Button>
          <Link href="#pricing" className="bg-transparent hover:bg-transparent text-foreground hover:text-pink-light transition-colors duration-300 text-sm font-bold p-0">Pricing</Link>
          <Link href="#about" className="bg-transparent hover:bg-transparent text-foreground hover:text-pink-light transition-colors duration-300 text-sm font-bold p-0">About</Link>
          <Link href="#contact" className="bg-transparent hover:bg-transparent text-foreground hover:text-pink-light transition-colors duration-300 text-sm font-bold p-0">Contact</Link>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-transparent text-foreground hover:bg-transparent hover:text-pink-light transition-colors duration-300 font-bold">Sign In</Button>
          <Button className="bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
