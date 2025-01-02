import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            width={500}
            height={500}
            alt="MaffeiTech"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tigh">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium">Email address</label>

              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400  border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
                <p className="text-sm text-gray-500">
                  We will never share your email address.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mt-5">Password</label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm ">
                    Remember me
                  </label>
                  &nbsp;
                  <a href="#" className="text-sm hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="block items-center justify-between">
                <div className="flex items-center my-4 justify-between">
                  <Button
                    type="submit"
                    className="group relative w-1/2 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Sign in
                  </Button>
                  <>
                    <span className="text-sm justify-end">
                      or
                      <Link href="#" className="ml-2 text-sm underline">
                        Sign up
                      </Link>
                    </span>
                  </>
                </div>
                <div className="block items-center justify-center space-y-2 mt-10 sm:mt-0">
                  <Button variant="outline" className="w-full text-sm">
                    Continue with Google
                  </Button>

                  <Button variant="outline" className="w-full text-sm">
                    Continue with Facebook
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
