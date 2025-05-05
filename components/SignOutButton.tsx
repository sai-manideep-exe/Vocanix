'use client'

import { signOut } from '@/lib/actions/auth.action'
import Image from 'next/image';


const SignOutButton = () => {
    const handleSignOut = () => {
        signOut()
    }

    return (
        <>
            <button onClick={handleSignOut} title='Logout' className="flex items-center cursor-pointer gap-2 transition-all duration-200 hover:scale-110 ">
                <Image src="/logout.png" alt="Logout Icon" width={75} height={65} className="mb-8"/>

            </button>
        </>
    );
}

export default SignOutButton