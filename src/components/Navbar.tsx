import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ChevronsRight, LucideBanknote } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
    
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    

    return (
        <nav className="sticky w-full inset-x-0 top-0 border-b border-gray-200 bg-white/75 h-14 backdrop-blur-lg transition-all z-50">
            <MaxWidthWrapper>
            <div className="flex h-14 text-lg justify-between items-center ">
                <Link href="/" className="flex font-semibold">
                case
                <span className="text-blue-600 ">shark</span>
                </Link>

                <div className="flex justify-between gap-5 text-lg">
                {user ? (
                    <>
                    <Link
                        href='/api/auth/logout'
                        className={buttonVariants({
                            size: 'sm',
                            variant:'ghost'
                            })}>
                            Sign out
                    </Link>
                            {isAdmin ? null : <div className="h-8 w-px bg-zinc-200 hidden sm:flex"/>}
                    {isAdmin ? (
                        <>
                        <Link
                        href='/dashboard'
                        className={buttonVariants({
                            size: 'sm',
                            variant:'ghost'
                            })}>
                            Dashboard
                    </Link>
                    <div className="h-8 w-px bg-zinc-200 hidden sm:flex"/>
                        </>
                    ) : (
                        null
                    )}
                    </>
                    ) : (
                        <>
                        <Link
                        href='/api/auth/register'
                        className={buttonVariants({
                            size: 'sm',
                            variant:'ghost'
                            })}>
                            Sign up
                        </Link>
                        <Link
                        href='/api/auth/login'
                        className={buttonVariants({
                            size: 'sm',
                            variant:'ghost'
                            })}>
                            Login
                        </Link>

                        <div className="h-8 w-px bg-zinc-200 hidden sm:flex"/>
                        </>
                    ) }

                    <Link
                        href='/configure/upload'
                        className={buttonVariants({
                            size: 'sm',
                            className: 'hidden sm:flex items-center gap-1'
                            })}>
                            Create Case<ChevronsRight className="ml-5 h-5 w-5" />
                    </Link>
                </div>
            </div>


            </MaxWidthWrapper>
        </nav>
    );
}

export default Navbar