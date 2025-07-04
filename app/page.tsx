"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";


export default function Home(){
  return (
<SessionProvider>
  <RealHome />
</SessionProvider>
  )
}
  

 function RealHome() {
  const { data: session, status } = useSession();
  console.log("Session Data:", session);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 text-gray-800">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h1 className="text-2xl font-semibold text-center mb-4">Course Selling App</h1>
        <p className="text-center">Welcome to the Course Selling App!</p>
        <Image
          src="/course_image.jpg"
          alt="Course Image"
          width={300}
          height={200}
          className="mt-4 rounded-lg"
        />
        <div className="mt-4 text-center">
          {status === "authenticated" ? (
            <p>Welcome back, {session?.user.name} !</p>
          ) : (
            <p>Please sign in to access your courses.</p>
          )}
          <a
            href="/api/auth/signin"
            className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
