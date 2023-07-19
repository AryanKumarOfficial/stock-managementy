import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        src={'/favicon.ico'}
                        width={50}
                        height={50}
                        alt="logo"
                    />
                    <span className="ml-3 text-xl">STOCK MANAGEMENT SYSTEM</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href='/' className="mr-5 hover:text-gray-900">First Link</Link>
                    <Link href='/' className="mr-5 hover:text-gray-900">Second Link</Link>
                    <Link href='/' className="mr-5 hover:text-gray-900">Third Link</Link>
                    <Link href='/' className="mr-5 hover:text-gray-900">Fourth Link</Link>
                </nav>
            </div>
        </header>

    )
}

export default Header