import React from 'react';
import ReactNode from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {isAuthenticated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";
import SignOutButton from "@/components/SignOutButton";


const RootLayout = async ({ children } : { children: ReactNode }) => {

    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated) redirect('/sign-in');
    return (
        <div className="root-layout">
            <nav className="flex flex-row justify-between items-center p-4 ">
                <Link href="/" className="flex items-center gap-2">
                    <Image src='/dang.svg' alt="logo" height={45} width={70}/>
                    <h2 className="text-primary-100 mb-4">Vocanix</h2>
                </Link>
                <SignOutButton />
            </nav>

            {children}

        </div>
    )
}

export default RootLayout;