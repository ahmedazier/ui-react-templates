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
                  autocomplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400  border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
                <p className="text-sm text-gray-500">
                  We'll never share your email address.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Password</label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
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
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm "
                  >
                     Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-900"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-accent bg-accent hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Sign in
                  </Button>
                  <span className="text-sm">
                    or
                  </span>
                  <Link
                    href="#"
                    className="ml-1 text-sm text-accent hover:text-accent/50"
                  >
                    Sign up
                  </Link>
                  <div className="flex items-center justify-center mt-4 sm:mt-0">

                    <Button variant="outline" className="w-full text-sm">
                      Continue with Google
                    </Button>

                    <Button variant="outline" className="w-full text-sm">
                      Continue with Facebook
                    </Button>
                  </div>
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
