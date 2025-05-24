import { SignInBackgroundDecorators, SignInDecorators, CardDetails, TextDetails } from "@/components/decorators/signInDecorators"

const SignIn = () => {
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
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignIn