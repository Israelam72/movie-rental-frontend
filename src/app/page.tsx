import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import Image from "next/image"

import { Film, Play, Star } from "lucide-react"

interface Movie {
  id: number
  title: string
  genre: string
  director: string
  releaseYear: number
  synopsis: string
  rating: number
}

export default async function Home() {
  const res = await fetch("http://localhost:8000/home/")
  const data: Movie[] = await res.json()

  return (
    <div id="home" className="flex flex-col items-center min-h-screen bg-background text-foreground">
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
      <section id="feature" className="relative bg-backgroundSecondary py-20 md:py-32 overflow-hidden w-full">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
                Featured Movies
            </h2>
            <div className="w-24 h-1 bg-pink-md my-4"></div>
            <p className="text-text-gray max-w-2xl mx-auto">
            Check out our latest additions and most popular titles available for rent or streaming.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((movie: Movie) => (
              <Card key={movie.id} className="bg-backgroundSecondary border-2 border-pink-md/30 overflow-hidden rounded-none group">
                <div className="relative aspect-[2/3] w-full overflow-hidden">
                  <div className="absolute inset-0 border-b-2 border-pink-500/30 z-10"></div>
                  <Image
                    src={"/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 filter saturate-50"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="font-bold tracking-wide">{movie.title}</CardTitle>
                  <div className="flex items-center gap-1 text-pink-md">
                    <Star className="w-4 h-4 fill-pink-md" />
                    <span className="text-sm">{movie.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="text-text-gray">
                    {movie.synopsis}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">
                    <Film className="mr-2 h-4 w-4" />
                    Watch Trailer
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
