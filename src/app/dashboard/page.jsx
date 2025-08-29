"use client"

import {signOut} from "next-auth/react";

function dashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <h1 className="text-white text-5xl">Dashboard</h1>
        <button className="bg-white text-black font-bold py-2 px-4 rounded ml-4"
        onClick={() => signOut()}
        >
            Logout
        </button>
    </section>
  )
}

export default dashboardPage;