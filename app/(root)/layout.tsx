import React from 'react';
import ReactNode from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RootLayout = ({ children } : { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src='/erm.svg' alt="logo" height={35} width={40}/>
                    <h2 className="text-primary-100">Vocanix</h2>
                </Link>

            </nav>

            {children}

        </div>
    )
}

export default RootLayout;