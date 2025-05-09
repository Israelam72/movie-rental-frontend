import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden w-full">
        <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Unlimited Movies,
            <span className="text-pink-md"> Anytime</span>
            , Anywhere
          </h1>
          <div className="w-24 h-2 bg-pink-md my-4"></div>
          <p className="text-lg md:text-xl text-home-text">
            We have the latest blockbusters, classics and exclusive content available on VHS, CDs, DVDs, Blu-rays, Streaming. You name it, we have it.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 p-10">
          <Button 
            size="lg" 
            className="bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Start Free Trial</Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-teal-md text-teal-md rounded-none hover:bg-teal-darkest hover:text-foreground transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100"><Play className="mr-2 h-4 w-4" />Watch Trailer</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection