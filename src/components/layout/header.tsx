import { Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex items-center gap-2">
        <Clapperboard />
        <h1 className="text-2xl font-bold">RENTAMOVIE</h1>
        <div className="flex items-center gap-2">
          <Button>Movies</Button>
          <Button>Pricing</Button>
          <Button>About</Button>
          <Button>Contact</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button>Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}
