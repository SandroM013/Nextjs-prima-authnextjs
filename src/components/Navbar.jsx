import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function NavBar(){
    const session = await getServerSession(authOptions)
    return(
        <nav className="flex py-3 justify-between items-center bg-gray-950 text-white px-24">
            <h1 className="font-bold text-2xl">
                NexAuth</h1>
            <ul className="flex gap-4">
               {
                !session?.user ? (
                    <>
                         <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/auth/login">
                    Login
                    </Link>
                </li>
                <li>
                    <Link href="/auth/register">
                    Register
                    </Link>
                </li>
                    </>
                ) :(
                    <>
                    <li>
                    <Link href="/dashboard">
                    Dashboard
                    </Link>
                </li>
                 <li>
                    <Link href="/dashboard/settings">
                    Settings
                    </Link>
                </li>
                <li>
                    <Link href="/api/auth/signout">
                    Logout
                    </Link>
                </li>
                    </>
                )
               }
            </ul>
        </nav>
    )
}

export default NavBar;