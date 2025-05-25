"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { type SignInData, signInSchema } from "./schema"
import { Button } from "@/components/ui/button"
import { SignInBackgroundDecorators, SignInDecorators, CardDetails, TextDetails } from "@/components/decorators/signInDecorators"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const SignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit = (data: z.infer<typeof signInSchema>) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col bg-background items-center justify-center h-screen">
      <SignInBackgroundDecorators />
      <main className="flex flex-1 items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md">
          <div className="relative">
            <SignInDecorators />
            <div className="bg-backgroundSecondary border-2 border-pink-light p-8 relative">
              <CardDetails />
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold tracking-wider mb-2">Sign In</h1>
                <TextDetails />
                <p className="text-gray-400">Welcome back to RENTAMOVIE</p>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField 
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input id="email" type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl>
                          <Input id="password" type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Sign In</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignIn