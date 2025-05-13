import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Plan {
  id: number
  name: string
  price: number
  description: string
  duration: number
  features: string[]
}

const PricingSection = async () => {
  const res = await fetch("http://localhost:8000/plans/")
  const data: Plan[] = await res.json()

  return (
    <section id="pricing" className="relative bg-background py-20 md:py-32 overflow-hidden w-full">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <div className="w-24 h-1 bg-pink-md my-4"></div>
          <p className="text-text-gray max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to our entire catalog.
          </p> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.map((plan: Plan, key: number) => (
            <Card key={key} className="bg-backgroundSecondary border-2 border-pink-md/30 rounded-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold tracking-wide">{plan.name}</CardTitle>
                <p className="text-2xl font-bold">${plan.price} <span className="text-sm text-text-gray">per month</span></p>
                <CardDescription>{plan.description}</CardDescription> 
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}

export default PricingSection