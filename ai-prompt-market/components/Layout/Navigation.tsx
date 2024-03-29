import React from 'react'
import Link from 'next/link';
type Props = {
    activeItem: number
}

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Marketplace",
        href: "/marketplace",
    },
    {
        title: "Contact Us",
        href: "/contact",
    },
    {
        title: "Policy",
        href: "/policy",
    },
];

export default function Navigation({ activeItem }: Props) {
    return (
        <div className="block md:flex">
            {navItems.map((item, index) => (
                <Link key={item.title} href={item.href}>
                    <h5
                        className={`h-full flex justify-center items-center md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter 
                                    ${activeItem === index && "text-[#6dff4b]"
                            }`}
                    >
                        {item.title}
                    </h5>
                </Link>
            ))}
        </div>
    )
}
